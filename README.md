# Multilingual ML Disease Diagnosis & Specialist Recommendation

A student-friendly Flask + scikit-learn prototype that demonstrates:

- Symptom-based ML prediction
- Top-3 predicted conditions
- Probability scores
- Basic explainable-AI view
- Symptom severity and duration
- Risk/urgent-care flag
- Disease-specific specialist recommendation
- 10-language interface
- Browser voice input using Web Speech API
- Patient history stored in SQLite
- PDF report generation
- Nearby specialist search using Google Maps search
- Photo upload up to 10 MB + optional image-model diagnosis pipeline
- Model training script and transparent prototype dataset

## Important medical note
This is an educational software project. It is NOT a medical diagnostic system and must not replace a qualified healthcare professional. The included training data is synthetic/prototype data for demonstrating the ML pipeline. For academic evaluation, replace it with a properly sourced and ethically appropriate dataset, document its limitations, and validate the model.

## Supported languages
English, Kannada, Hindi, Telugu, Tamil, Malayalam, Marathi, Bengali, Gujarati, Punjabi.

The UI labels and common symptom names are translated locally. Medical model labels remain in English by default so the prototype is easier to validate.

## Run on Windows
1. Install Python 3.10+.
2. Open Command Prompt in this project folder.
3. Create a virtual environment:
   python -m venv venv
4. Activate it:
   venv\Scripts\activate
5. Install packages:
   pip install -r requirements.txt
6. Start:
   python app.py
7. Open:
   http://127.0.0.1:5000

## Run on Linux/macOS
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python app.py

## Project structure
app.py                 Flask routes, SQLite history, PDF report
model.py               ML training + prediction + specialist mapping
templates/index.html   Main UI
static/style.css       Responsive styling
static/app.js          multilingual UI, voice input, API calls
data/history.db        created automatically
models/                trained model created automatically

## How to make this a stronger final-year project
- Use a validated public medical dataset rather than the demo data.
- Add train/test split and cross-validation.
- Report precision, recall, F1 and confusion matrix.
- Compare Random Forest, SVM, Naive Bayes, Logistic Regression and XGBoost.
- Use SHAP/LIME for formal explainability.
- Add authentication and role-based access.
- Add clinician-reviewed specialist mapping.
- Add a proper hospital/doctor directory API instead of generic map search.
- Add Kannada/Hindi/etc. speech recognition and translation after validating medical terminology.
- Conduct usability and fairness evaluation across languages.


## Photo upload
The UI accepts JPG/JPEG/PNG/WEBP images up to 5 MB. Uploaded images are saved in the local `uploads/` folder. The current ML model uses symptoms, age, duration and severity only; it does NOT analyze the photo. This separation avoids falsely claiming that the prototype can diagnose disease from images.

If you later add a validated computer-vision model, restrict it to an appropriate clinical use case, obtain a suitable labeled dataset and permissions, evaluate sensitivity/specificity, and clearly present it as decision support rather than a definitive diagnosis.


## Photo diagnosis module
The project now contains a complete **image-classification pipeline**:
- Upload JPG/JPEG/PNG/WEBP up to **10 MB**
- Preview the image
- `/diagnose-photo` endpoint
- `train_image_model.py` using transfer learning (MobileNetV2)
- Saves the trained model to `models/image_model.keras`
- Saves class names to `models/image_classes.txt`

### Important
A medical image classifier cannot be safely claimed as a diagnostic system just by adding a generic image model. The ZIP therefore does **not** ship a fake/pretrained medical model. You must train it on a suitable, properly sourced and validated dataset for one defined clinical image task.

For example, if your project is specifically about skin images, use a legitimate dermatology image dataset with documented licensing and class labels, then evaluate it with a held-out test set. Do not use a general-purpose ImageNet model as a medical diagnosis model.

### Train the image model
1. Install requirements.
2. Put your dataset into:
   `data/image_dataset/<condition_name>/*.jpg`
3. Run:
   `python train_image_model.py`
4. Restart the Flask app.
5. Upload a photo and click **Diagnose From Photo**.

The symptom model and image model remain separate so you can compare their results rather than silently combining unvalidated probabilities.


## V4 fixes
Specialist is now shown in a dedicated result card. Read Aloud has Pause/Resume/Stop controls. Voice input uses the selected Indian language locale and microphone error handling. Result labels are localized and disease/specialist names have additional local-language mappings. Browser support and installed speech voices vary by OS/browser.
