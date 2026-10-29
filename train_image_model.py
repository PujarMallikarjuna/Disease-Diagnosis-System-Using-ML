"""
Train an image classifier for your PROJECT-SPECIFIC, properly sourced dataset.

Dataset structure:
data/image_dataset/
  class_1/
    image1.jpg
  class_2/
    image2.jpg
  ...

Example for a dermatology-only project:
data/image_dataset/
  acne/
  dermatitis/
  psoriasis/

Do not mix unrelated conditions. Use a clinically appropriate dataset and
document licensing, consent/provenance, class balance and validation.
"""
import os
import tensorflow as tf
from tensorflow.keras import layers, models

DATA = "data/image_dataset"
OUT = "models/image_model.keras"
CLASSES_OUT = "models/image_classes.txt"
IMG = (224, 224)
BATCH = 32
SEED = 42

if not os.path.isdir(DATA):
    raise SystemExit("Create data/image_dataset/<class_name>/ folders first.")

train = tf.keras.utils.image_dataset_from_directory(
    DATA, validation_split=0.2, subset="training", seed=SEED,
    image_size=IMG, batch_size=BATCH
)
val = tf.keras.utils.image_dataset_from_directory(
    DATA, validation_split=0.2, subset="validation", seed=SEED,
    image_size=IMG, batch_size=BATCH
)
classes = train.class_names

base = tf.keras.applications.MobileNetV2(
    input_shape=IMG+(3,), include_top=False, weights="imagenet"
)
base.trainable = False

model = models.Sequential([
    layers.Rescaling(1./255),
    base,
    layers.GlobalAveragePooling2D(),
    layers.Dropout(0.25),
    layers.Dense(len(classes), activation="softmax")
])
model.compile(optimizer="adam", loss="sparse_categorical_crossentropy", metrics=["accuracy"])
model.fit(train, validation_data=val, epochs=8)
os.makedirs("models", exist_ok=True)
model.save(OUT)
with open(CLASSES_OUT, "w", encoding="utf-8") as f:
    f.write("\n".join(classes))
print("Saved:", OUT)
print("Classes:", classes)
