from flask import Flask, render_template, request, jsonify, send_file, session
from werkzeug.utils import secure_filename
from werkzeug.security import generate_password_hash, check_password_hash
import sqlite3, os, io
from datetime import datetime
from model import predict_disease, predict_from_photo, train_model, SYMPTOMS, DISEASE_INFO, IMAGE_MAX_SIZE_MB
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4

app = Flask(__name__)
app.secret_key = os.environ.get("SECRET_KEY", "medical-ml-secret-key-2026-v6")

# Photo upload settings
UPLOAD_DIR = os.path.join("data", "uploads")
MAX_PHOTO_MB = 10
ALLOWED_PHOTO_EXTENSIONS = {"jpg", "jpeg", "png", "webp"}

os.makedirs(UPLOAD_DIR, exist_ok=True)


def allowed_photo(filename):
    if not filename or "." not in filename:
        return False

    extension = filename.rsplit(".", 1)[1].lower()
    return extension in ALLOWED_PHOTO_EXTENSIONS

DB = "data/history.db"

def init_db():
    os.makedirs("data", exist_ok=True)
    con = sqlite3.connect(DB)
    # Users / Patients table
    con.execute("""CREATE TABLE IF NOT EXISTS users(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        created_at TEXT,
        fullname TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password_hash TEXT NOT NULL,
        phone TEXT,
        age INTEGER,
        sex TEXT,
        blood_group TEXT,
        emergency_contact TEXT,
        medical_history TEXT
    )""")
    # History table
    con.execute("""CREATE TABLE IF NOT EXISTS history(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        created_at TEXT,
        age INTEGER,
        sex TEXT,
        duration INTEGER,
        severity TEXT,
        symptoms TEXT,
        disease TEXT,
        probability REAL,
        specialist TEXT,
        language TEXT,
        user_id INTEGER,
        FOREIGN KEY(user_id) REFERENCES users(id)
    )""")
    # Add user_id column if upgrading an existing history table
    cursor = con.cursor()
    cursor.execute("PRAGMA table_info(history)")
    columns = [row[1] for row in cursor.fetchall()]
    if "user_id" not in columns:
        con.execute("ALTER TABLE history ADD COLUMN user_id INTEGER")
    con.commit()
    con.close()

@app.route("/")
def index():
    return render_template("index.html", symptoms=SYMPTOMS, diseases=DISEASE_INFO)

# --- AUTHENTICATION & PATIENT REGISTRATION ROUTES ---

@app.post("/register")
def register():
    data = request.get_json(force=True) or {}
    fullname = (data.get("fullname") or "").strip()
    email = (data.get("email") or "").strip().lower()
    password = (data.get("password") or "").strip()
    phone = (data.get("phone") or "").strip()
    age_val = data.get("age")
    age = int(age_val) if age_val not in (None, "", "null") else None
    sex = (data.get("sex") or "").strip()
    blood_group = (data.get("blood_group") or "").strip()
    emergency_contact = (data.get("emergency_contact") or "").strip()
    medical_history = (data.get("medical_history") or "").strip()

    if not fullname:
        return jsonify({"error": "Full name is required."}), 400
    if not email or "@" not in email or "." not in email:
        return jsonify({"error": "A valid email address is required."}), 400
    if not password or len(password) < 6:
        return jsonify({"error": "Password must be at least 6 characters long."}), 400

    pwd_hash = generate_password_hash(password)
    created_at = datetime.now().isoformat(timespec="seconds")

    con = sqlite3.connect(DB)
    cur = con.cursor()
    try:
        cur.execute("""INSERT INTO users 
            (created_at, fullname, email, password_hash, phone, age, sex, blood_group, emergency_contact, medical_history)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)""",
            (created_at, fullname, email, pwd_hash, phone, age, sex, blood_group, emergency_contact, medical_history))
        user_id = cur.lastrowid
        con.commit()
    except sqlite3.IntegrityError:
        con.close()
        return jsonify({"error": "An account with this email already exists."}), 400
    con.close()

    # Automatically log the user in upon registration
    session["user_id"] = user_id
    session["user_name"] = fullname

    return jsonify({
        "success": True,
        "message": "Registration successful! You are now logged in.",
        "user": {
            "id": user_id,
            "fullname": fullname,
            "email": email,
            "phone": phone,
            "age": age,
            "sex": sex,
            "blood_group": blood_group,
            "emergency_contact": emergency_contact,
            "medical_history": medical_history
        }
    })

@app.post("/login")
def login():
    data = request.get_json(force=True) or {}
    email = (data.get("email") or "").strip().lower()
    password = (data.get("password") or "").strip()

    if not email or not password:
        return jsonify({"error": "Please provide both email and password."}), 400

    con = sqlite3.connect(DB)
    cur = con.cursor()
    cur.execute("SELECT id, fullname, email, password_hash, phone, age, sex, blood_group, emergency_contact, medical_history FROM users WHERE email = ?", (email,))
    row = cur.fetchone()
    con.close()

    if not row or not check_password_hash(row[3], password):
        return jsonify({"error": "Invalid email or password."}), 401

    session["user_id"] = row[0]
    session["user_name"] = row[1]

    return jsonify({
        "success": True,
        "message": "Login successful.",
        "user": {
            "id": row[0],
            "fullname": row[1],
            "email": row[2],
            "phone": row[4],
            "age": row[5],
            "sex": row[6],
            "blood_group": row[7],
            "emergency_contact": row[8],
            "medical_history": row[9]
        }
    })

@app.post("/logout")
def logout():
    session.clear()
    return jsonify({"success": True, "message": "Logged out successfully."})

@app.get("/current-user")
def current_user():
    user_id = session.get("user_id")
    if not user_id:
        return jsonify({"authenticated": False, "user": None})

    con = sqlite3.connect(DB)
    cur = con.cursor()
    cur.execute("SELECT id, fullname, email, phone, age, sex, blood_group, emergency_contact, medical_history FROM users WHERE id = ?", (user_id,))
    row = cur.fetchone()
    con.close()

    if not row:
        session.clear()
        return jsonify({"authenticated": False, "user": None})

    return jsonify({
        "authenticated": True,
        "user": {
            "id": row[0],
            "fullname": row[1],
            "email": row[2],
            "phone": row[3],
            "age": row[4],
            "sex": row[5],
            "blood_group": row[6],
            "emergency_contact": row[7],
            "medical_history": row[8]
        }
    })

@app.post("/update-profile")
def update_profile():
    user_id = session.get("user_id")
    if not user_id:
        return jsonify({"error": "Authentication required."}), 401

    data = request.get_json(force=True) or {}
    fullname = (data.get("fullname") or "").strip()
    phone = (data.get("phone") or "").strip()
    age_val = data.get("age")
    age = int(age_val) if age_val not in (None, "", "null") else None
    sex = (data.get("sex") or "").strip()
    blood_group = (data.get("blood_group") or "").strip()
    emergency_contact = (data.get("emergency_contact") or "").strip()
    medical_history = (data.get("medical_history") or "").strip()

    if not fullname:
        return jsonify({"error": "Full name cannot be empty."}), 400

    con = sqlite3.connect(DB)
    cur = con.cursor()
    cur.execute("""UPDATE users SET 
        fullname = ?, phone = ?, age = ?, sex = ?, blood_group = ?, emergency_contact = ?, medical_history = ?
        WHERE id = ?""",
        (fullname, phone, age, sex, blood_group, emergency_contact, medical_history, user_id))
    con.commit()
    con.close()

    session["user_name"] = fullname

    return jsonify({
        "success": True,
        "message": "Profile updated successfully.",
        "user": {
            "id": user_id,
            "fullname": fullname,
            "phone": phone,
            "age": age,
            "sex": sex,
            "blood_group": blood_group,
            "emergency_contact": emergency_contact,
            "medical_history": medical_history
        }
    })

# --- PREDICTION & CLINICAL WORKFLOW ROUTES ---

@app.post("/predict")
def predict():
    data = request.get_json(force=True) or {}
    selected = data.get("symptoms", [])
    age = int(data.get("age") or 0)
    sex = data.get("sex", "")
    duration = int(data.get("duration") or 0)
    severity = data.get("severity", "mild")
    language = data.get("language", "en")
    user_id = session.get("user_id")

    result = predict_disease(selected, age, duration, severity)
    top3 = result.get("top3", [])
    if top3:
        primary = top3[0]
        con = sqlite3.connect(DB)
        con.execute("""INSERT INTO history
            (created_at,age,sex,duration,severity,symptoms,disease,probability,specialist,language,user_id)
            VALUES(?,?,?,?,?,?,?,?,?,?,?)""",
            (datetime.now().isoformat(timespec="seconds"), age, sex, duration,
             severity, ", ".join(selected), primary["disease"], primary["probability"],
             primary["specialist"], language, user_id))
        con.commit()
        con.close()

    return jsonify(result)


@app.route("/upload-photo", methods=["POST"])
def upload_photo():
    if "photo" not in request.files:
        return jsonify({"error": "No photo selected."}), 400

    photo = request.files["photo"]

    if not photo.filename:
        return jsonify({"error": "Please select a photo."}), 400

    if not allowed_photo(photo.filename):
        return jsonify({
            "error": "Only JPG, JPEG, PNG and WEBP images are allowed."
        }), 400

    # Check maximum 10 MB
    photo.stream.seek(0, os.SEEK_END)
    size = photo.stream.tell()
    photo.stream.seek(0)

    if size > MAX_PHOTO_MB * 1024 * 1024:
        return jsonify({
            "error": "Photo must be 10 MB or smaller."
        }), 400

    filename = secure_filename(photo.filename)
    filepath = os.path.join(UPLOAD_DIR, filename)

    photo.save(filepath)

    return jsonify({
        "success": True,
        "message": "Photo uploaded successfully.",
        "filename": filename
    })


@app.post("/diagnose-photo")
def diagnose_photo():
    photo = request.files.get("photo")
    if not photo or not photo.filename:
        return jsonify({"error": "No photo selected."}), 400
    if not allowed_photo(photo.filename):
        return jsonify({"error": "Allowed formats: JPG, JPEG, PNG, WEBP."}), 400
    photo.stream.seek(0, os.SEEK_END)
    size = photo.stream.tell()
    photo.stream.seek(0)
    if size > IMAGE_MAX_SIZE_MB * 1024 * 1024:
        return jsonify({"error": f"Photo must be {IMAGE_MAX_SIZE_MB} MB or smaller."}), 400
    filename = secure_filename(photo.filename)
    stamp = datetime.now().strftime("%Y%m%d_%H%M%S_%f")
    saved = f"{stamp}_{filename}"
    path = os.path.join(UPLOAD_DIR, saved)
    photo.save(path)
    result = predict_from_photo(path)
    result["filename"] = saved
    
    # Save to history if diagnosis produced
    if result.get("available") and result.get("top3"):
        user_id = session.get("user_id")
        created_at = datetime.now().isoformat(timespec="seconds")
        top_pred = result["top3"][0] if result["top3"] else {}
        syms_str = ", ".join(result.get("detected_symptoms", [])) or "None (Visual Scan)"
        con = sqlite3.connect(DB)
        con.execute(
            """INSERT INTO history
               (created_at, age, sex, duration, severity, symptoms, disease, probability, specialist, language, user_id)
               VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)""",
            (created_at, 0, "Photo", 0, "moderate", f"📸 {syms_str}", top_pred.get("disease", "N/A"), top_pred.get("probability", 0.0), top_pred.get("specialist", "N/A"), "en", user_id)
        )
        con.commit()
        con.close()
        
    return jsonify(result)

@app.post("/train-photo-model")
def api_train_photo_model():
    try:
        import photo_model
        bundle = photo_model.train_photo_model(force=True)
        return jsonify({
            "success": True,
            "test_accuracy": round(bundle["test_accuracy"] * 100, 2),
            "classes": bundle["classes"],
            "message": f"Photo diagnosis ML model trained successfully with {round(bundle['test_accuracy'] * 100, 1)}% accuracy."
        })
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500

@app.get("/history")
def history():
    user_id = session.get("user_id")
    con = sqlite3.connect(DB)
    if user_id:
        rows = con.execute("SELECT id, created_at, age, sex, duration, severity, symptoms, disease, probability, specialist, language FROM history WHERE user_id = ? ORDER BY id DESC LIMIT 50", (user_id,)).fetchall()
    else:
        rows = con.execute("SELECT id, created_at, age, sex, duration, severity, symptoms, disease, probability, specialist, language FROM history ORDER BY id DESC LIMIT 20").fetchall()
    con.close()
    return jsonify(rows)

@app.post("/report")
def report():
    data = request.get_json(force=True) or {}
    result = data.get("result", {})
    top3 = result.get("top3", [])
    patient_name = data.get("patient_name") or session.get("user_name", "Patient (Guest)")
    
    primary_condition = top3[0]["disease"] if top3 else "N/A"
    primary_prob = f'{top3[0]["probability"]}%' if top3 else "N/A"
    primary_spec = top3[0]["specialist"] if top3 else "N/A"
    risk_level = result.get("risk_level", "Low")

    buf = io.BytesIO()
    c = canvas.Canvas(buf, pagesize=A4)
    w, h = A4
    y = h - 55
    c.setFont("Helvetica-Bold", 16)
    c.drawString(45, y, "AI Disease Decision-Support Report")
    y -= 30
    c.setFont("Helvetica", 10)
    fields = [
        ("Date", datetime.now().strftime("%Y-%m-%d %H:%M")),
        ("Patient Name", str(patient_name)),
        ("Age", str(data.get("age", ""))),
        ("Sex", str(data.get("sex", ""))),
        ("Duration (days)", str(data.get("duration", ""))),
        ("Severity", str(data.get("severity", ""))),
        ("Symptoms", ", ".join(data.get("symptoms", []))),
        ("Predicted condition", primary_condition),
        ("Probability", primary_prob),
        ("Suggested specialist", primary_spec),
        ("Risk level", risk_level),
    ]
    for k, v in fields:
        c.setFont("Helvetica-Bold", 10); c.drawString(45, y, k + ":")
        c.setFont("Helvetica", 10); c.drawString(165, y, v[:85])
        y -= 18
    y -= 8
    c.setFont("Helvetica-Bold", 11); c.drawString(45, y, "Important:")
    y -= 17
    c.setFont("Helvetica", 9)
    disclaimer = ("This application is an educational decision-support prototype. "
                  "It does not provide a medical diagnosis and must not replace a qualified clinician.")
    c.drawString(45, y, disclaimer[:115])
    y -= 14
    c.drawString(45, y, disclaimer[115:])
    y -= 25
    c.setFont("Helvetica-Bold", 11); c.drawString(45, y, "Top predictions")
    y -= 18
    c.setFont("Helvetica", 10)
    for item in top3:
        c.drawString(55, y, f'{item["disease"]} - {item["probability"]}% - {item["specialist"]}')
        y -= 16
    c.save()
    buf.seek(0)
    return send_file(buf, as_attachment=True, download_name="disease_report.pdf", mimetype="application/pdf")

@app.get("/health")
def health():
    return {"status": "ok"}

if __name__ == "__main__":
    init_db()
    train_model()
    app.run(debug=True)


