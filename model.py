import os, pickle
import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import MultiLabelBinarizer

MODEL_PATH = "models/disease_model.pkl"

# Prototype feature set. Extend this list when you add a validated clinical dataset.
SYMPTOMS = [
    "fever","cough","sore_throat","runny_nose","fatigue","headache","body_pain",
    "shortness_of_breath","chest_pain","palpitations","swelling_legs",
    "frequent_urination","excessive_thirst","blurred_vision","skin_rash",
    "itching","joint_pain","back_pain","abdominal_pain","nausea","vomiting",
    "diarrhea","jaundice","burning_urination","blood_in_urine",
    "dizziness","seizure","weakness","anxiety","low_mood","ear_pain",
    "tooth_pain","vision_loss"
]

DISEASE_INFO = {
    "Common Cold": {"specialist":"General Physician","risk":"Low","advice":"Rest, hydration, and seek medical advice if symptoms are severe or persistent."},
    "Influenza": {"specialist":"General Physician","risk":"Moderate","advice":"Consider clinical evaluation, especially with high fever or breathing difficulty."},
    "Pneumonia": {"specialist":"Pulmonologist","risk":"High","advice":"Breathing difficulty or severe symptoms require prompt medical evaluation."},
    "Asthma": {"specialist":"Pulmonologist","risk":"Moderate","advice":"Seek medical evaluation for recurrent breathing symptoms or attacks."},
    "Heart Disease": {"specialist":"Cardiologist","risk":"High","advice":"Chest pain, fainting, or severe breathlessness can require urgent care."},
    "Diabetes": {"specialist":"Endocrinologist / Diabetologist","risk":"Moderate","advice":"Blood glucose testing and professional evaluation are important."},
    "Kidney Disease": {"specialist":"Nephrologist","risk":"Moderate","advice":"Kidney function and urine testing should be assessed by a clinician."},
    "Liver Disease": {"specialist":"Gastroenterologist / Hepatologist","risk":"Moderate","advice":"Persistent abdominal symptoms or jaundice need professional assessment."},
    "Dermatitis": {"specialist":"Dermatologist","risk":"Low","advice":"Avoid known irritants and seek assessment for persistent or worsening rash."},
    "Arthritis": {"specialist":"Rheumatologist / Orthopedist","risk":"Moderate","advice":"Persistent joint pain or swelling should be clinically evaluated."},
    "Gastroenteritis": {"specialist":"Gastroenterologist","risk":"Moderate","advice":"Maintain hydration and seek care for severe dehydration or persistent symptoms."},
    "UTI": {"specialist":"Urologist / General Physician","risk":"Moderate","advice":"A clinician may recommend urine testing and appropriate treatment."},
    "Migraine": {"specialist":"Neurologist","risk":"Moderate","advice":"Recurrent severe headaches should be evaluated, especially if new or unusual."},
    "Anxiety Disorder": {"specialist":"Psychiatrist / Psychologist","risk":"Moderate","advice":"A mental-health professional can provide assessment and treatment options."},
    "Depression": {"specialist":"Psychiatrist / Psychologist","risk":"Moderate","advice":"Professional mental-health support is recommended for persistent low mood."},
    "Otitis": {"specialist":"ENT Specialist","risk":"Low","advice":"Persistent ear pain, discharge, or hearing changes should be assessed."},
    "Dental Caries": {"specialist":"Dentist","risk":"Low","advice":"A dental examination is recommended for tooth pain or suspected decay."},
    "Eye Disorder": {"specialist":"Ophthalmologist","risk":"High","advice":"Sudden vision loss or major visual changes require urgent eye assessment."},
}

# A small transparent prototype dataset. Replace with a medically validated dataset before real-world use.
PROFILES = {
    "Common Cold":["fever","cough","sore_throat","runny_nose","headache","fatigue"],
    "Influenza":["fever","cough","sore_throat","body_pain","headache","fatigue"],
    "Pneumonia":["fever","cough","shortness_of_breath","chest_pain","fatigue"],
    "Asthma":["cough","shortness_of_breath","chest_pain"],
    "Heart Disease":["chest_pain","shortness_of_breath","palpitations","swelling_legs","fatigue"],
    "Diabetes":["frequent_urination","excessive_thirst","blurred_vision","fatigue","weakness"],
    "Kidney Disease":["swelling_legs","back_pain","blood_in_urine","frequent_urination","fatigue"],
    "Liver Disease":["jaundice","abdominal_pain","nausea","fatigue"],
    "Dermatitis":["skin_rash","itching"],
    "Arthritis":["joint_pain","swelling_legs","fatigue"],
    "Gastroenteritis":["abdominal_pain","nausea","vomiting","diarrhea","fever"],
    "UTI":["burning_urination","frequent_urination","blood_in_urine","fever"],
    "Migraine":["headache","nausea","dizziness"],
    "Anxiety Disorder":["anxiety","palpitations","dizziness","shortness_of_breath"],
    "Depression":["low_mood","fatigue","weakness"],
    "Otitis":["ear_pain","fever"],
    "Dental Caries":["tooth_pain"],
    "Eye Disorder":["vision_loss","blurred_vision","headache"],
}

def train_model():
    rng = np.random.default_rng(42)
    X, y = [], []
    for disease, profile in PROFILES.items():
        base = set(profile)
        for _ in range(100):
            row = np.zeros(len(SYMPTOMS), dtype=int)
            for i, s in enumerate(SYMPTOMS):
                p = 0.80 if s in base else 0.04
                row[i] = int(rng.random() < p)
            # Ensure at least one defining symptom
            if row.sum() == 0:
                row[SYMPTOMS.index(profile[0])] = 1
            X.append(row); y.append(disease)
    clf = RandomForestClassifier(n_estimators=250, random_state=42, class_weight="balanced")
    clf.fit(np.array(X), y)
    os.makedirs("models", exist_ok=True)
    with open(MODEL_PATH, "wb") as f:
        pickle.dump((clf, SYMPTOMS), f)
    try:
        import photo_model
        photo_model.train_photo_model()
    except Exception as e:
        print(f"Photo model training warning: {e}")
    return clf

def _load():
    if not os.path.exists(MODEL_PATH):
        train_model()
    with open(MODEL_PATH, "rb") as f:
        return pickle.load(f)


IMAGE_MAX_SIZE_MB = 10

def image_model_available():
    import photo_model
    return os.path.exists(photo_model.PHOTO_MODEL_PATH)

def predict_from_photo(image_path):
    """
    Run the trained Computer Vision & Machine Learning clinical photo classifier.
    Extracts visual features, predicts condition, extracts symptoms from photo,
    and returns full differential diagnosis with specialist recommendations.
    """
    import photo_model
    return photo_model.predict_from_photo(image_path)


def predict_disease(selected, age=0, duration=0, severity="mild"):
    """Transparent prototype scoring based on symptom-profile overlap.

    This is intentionally not a clinical diagnostic model. A single symptom is
    treated as weak evidence and the UI labels the outputs as possible
    conditions/model scores.
    """
    selected = [s for s in selected if s in SYMPTOMS]
    if not selected:
        return {"top3": [], "risk_level": "Low", "explanation": [], "symptoms_used": [],
                "disclaimer": "This is a student decision-support prototype, not a medical diagnosis."}

    # A small prior is used only to avoid counter-intuitive ties for very sparse
    # inputs (for example, cough alone should not jump directly to asthma).
    priors = {
        "Common Cold": 1.00, "Influenza": 0.78, "Pneumonia": 0.42,
        "Asthma": 0.48, "Heart Disease": 0.30, "Diabetes": 0.55,
        "Kidney Disease": 0.32, "Liver Disease": 0.28, "Dermatitis": 0.50,
        "Arthritis": 0.42, "Gastroenteritis": 0.55, "UTI": 0.55,
        "Migraine": 0.50, "Anxiety Disorder": 0.40, "Depression": 0.35,
        "Otitis": 0.38, "Dental Caries": 0.35, "Eye Disorder": 0.35
    }

    # Symptom-specific rules make the student demo intuitive and transparent.
    preferred = []
    if selected == ["cough"]:
        preferred = ["Common Cold", "Influenza", "Asthma"]
    elif selected == ["fever"]:
        preferred = ["Influenza", "Common Cold", "Pneumonia"]
    elif selected == ["tooth_pain"]:
        preferred = ["Dental Caries"]
    elif selected == ["skin_rash"] or set(selected) == {"skin_rash", "itching"}:
        preferred = ["Dermatitis"]

    scores = {}
    for disease, profile in PROFILES.items():
        overlap = len(set(selected) & set(profile))
        coverage = overlap / max(1, len(selected))
        profile_match = overlap / max(1, len(profile))
        # Reward diseases that explain more of the selected symptoms, with a
        # modest prior so one common symptom does not over-select a rare disease.
        score = 0.62 * coverage + 0.28 * profile_match + 0.10 * priors.get(disease, 0.3)
        scores[disease] = score

    # Explicitly break sparse-input ties in a human-readable way.
    if preferred:
        bonus = len(preferred)
        for rank, disease in enumerate(preferred):
            if disease in scores:
                scores[disease] += 0.30 - rank * 0.07

    order = sorted(scores, key=scores.get, reverse=True)[:3]
    raw = [max(scores[d], 0.0001) for d in order]
    total = sum(raw)
    top3 = []
    for disease, score in zip(order, raw):
        top3.append({
            "disease": disease,
            "probability": round(score / total * 100, 1),
            "specialist": DISEASE_INFO[disease]["specialist"],
            "risk": DISEASE_INFO[disease]["risk"],
            "advice": DISEASE_INFO[disease]["advice"]
        })

    risk = "Low"
    if "chest_pain" in selected or "seizure" in selected or "vision_loss" in selected:
        risk = "High"
    elif severity == "severe" or ("shortness_of_breath" in selected and "chest_pain" in selected):
        risk = "High"
    elif duration >= 14:
        risk = "Moderate"

    primary_profile = set(PROFILES[top3[0]["disease"]])
    influential = [s for s in selected if s in primary_profile][:6]
    explanation = influential if influential else selected[:6]

    return {
        "top3": top3,
        "risk_level": risk,
        "explanation": explanation,
        "symptoms_used": selected,
        "disclaimer": "This is a student decision-support prototype, not a medical diagnosis. A single symptom cannot reliably identify a disease."
    }

