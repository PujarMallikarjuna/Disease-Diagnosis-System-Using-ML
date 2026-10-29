import io
import json
import sys
sys.stdout.reconfigure(encoding='utf-8')
from app import app, init_db

def test_routes():
    init_db()
    client = app.test_client()

    # Health check
    res = client.get("/health")
    assert res.status_code == 200
    assert res.get_json() == {"status": "ok"}
    print("✓ /health passed")

    # Index page
    res = client.get("/")
    assert res.status_code == 200
    assert b"AI Multilingual Disease Decision-Support" in res.data or b"Disease" in res.data
    print("✓ / (index) passed")

    # Symptom prediction
    res = client.post("/predict", json={
        "symptoms": ["fever", "cough", "headache"],
        "age": 28,
        "sex": "Male",
        "duration": 3,
        "severity": "mild",
        "language": "en"
    })
    assert res.status_code == 200
    data = res.get_json()
    assert "top3" in data
    assert len(data["top3"]) > 0
    print("✓ /predict passed:", data["top3"][0]["disease"])

    # Register new user
    import time
    test_email = f"test_{int(time.time())}@example.com"
    res = client.post("/register", json={
        "fullname": "Test User",
        "email": test_email,
        "password": "password123",
        "phone": "9876543210",
        "age": 30,
        "sex": "Male"
    })
    assert res.status_code == 200
    reg_data = res.get_json()
    assert reg_data["success"] is True
    print("✓ /register passed")

    # Current user
    res = client.get("/current-user")
    assert res.status_code == 200
    assert res.get_json()["authenticated"] is True
    print("✓ /current-user passed")

    # History
    res = client.get("/history")
    assert res.status_code == 200
    print("✓ /history passed")

    print("\nAll API tests completed successfully!")

if __name__ == "__main__":
    test_routes()
