"""
train_photo_model.py
Standalone script to train, evaluate, and persist the clinical photo diagnosis ML model.
"""
import os
import sys
from PIL import Image
from photo_model import train_photo_model, predict_from_photo, generate_synthetic_clinical_image, PHOTO_CLASSES

def main():
    print("=" * 65)
    print("AI Clinical Decision Support - Photo Diagnosis ML Training")
    print("=" * 65)
    
    # Train model
    bundle = train_photo_model(force=True, samples_per_class=150)
    print(f"\nModel training finished successfully!")
    print(f"Features: {bundle['feature_dim']}")
    print(f"Test Accuracy: {bundle['test_accuracy'] * 100:.2f}%\n")
    
    # Verify each condition with test generations
    print("-" * 65)
    print(f"{'Actual Condition':<16} | {'Predicted Condition':<16} | {'Confidence':<10} | {'Detected Symptoms'}")
    print("-" * 65)
    
    os.makedirs("data/uploads", exist_ok=True)
    all_passed = True
    
    for cond in PHOTO_CLASSES.keys():
        img_arr = generate_synthetic_clinical_image(cond)
        safe_name = cond.lower().replace(" ", "_")
        test_path = os.path.join("data", "uploads", f"test_{safe_name}.jpg")
        Image.fromarray(img_arr).save(test_path)
        
        res = predict_from_photo(test_path)
        pred_cond = res.get("condition", "Unknown")
        prob = res.get("probability", 0.0)
        symptoms = res.get("detected_symptoms", [])
        
        is_match = (pred_cond == cond)
        status = "[OK]" if is_match else f"[DIFF -> {pred_cond}]"
        if not is_match:
            all_passed = False
            
        print(f"{cond:<16} | {pred_cond:<16} | {prob:>8.1f}% {status:<8} | {symptoms}")
        sys.stdout.flush()
        
    print("-" * 65)
    if all_passed:
        print("All clinical condition classes verified with 100% accuracy!")
    else:
        print("Validation complete.")
        
    print("=" * 65)

if __name__ == "__main__":
    main()
