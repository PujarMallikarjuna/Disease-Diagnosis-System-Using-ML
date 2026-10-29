from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report, accuracy_score
from model import train_model, PROFILES, SYMPTOMS
import numpy as np
from sklearn.ensemble import RandomForestClassifier

rng=np.random.default_rng(7)
X=[]; y=[]
for disease, profile in PROFILES.items():
    for _ in range(80):
        row=np.array([int(rng.random() < (0.8 if s in profile else 0.04)) for s in SYMPTOMS])
        X.append(row); y.append(disease)
X=np.array(X); y=np.array(y)
Xtr,Xte,ytr,yte=train_test_split(X,y,test_size=.2,random_state=42,stratify=y)
m=RandomForestClassifier(n_estimators=250,random_state=42,class_weight="balanced")
m.fit(Xtr,ytr); pred=m.predict(Xte)
print("Accuracy:", round(accuracy_score(yte,pred),4))
print(classification_report(yte,pred))
