from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
import bcrypt

app = Flask(__name__)
CORS(app)

# Connect to MongoDB
client = MongoClient("mongodb://localhost:27017/")
db = client["th3ee"]
users = db["users"]

# Signup Route
@app.route('/signup', methods=['POST'])
def signup():
    data = request.json
    phone = data.get('phone')
    password = data.get('password')

    if users.find_one({"phone": phone}):
        return jsonify({"status": "fail", "message": "User already exists"}), 409

    hashed = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
    users.insert_one({"phone": phone, "password": hashed})
    return jsonify({"status": "success", "message": "Signup successful"})

# Login Route
@app.route('/login', methods=['POST'])
def login():
    data = request.json
    phone = data.get('phone')
    password = data.get('password')

    user = users.find_one({"phone": phone})
    if user and bcrypt.checkpw(password.encode('utf-8'), user['password']):
        return jsonify({"status": "success", "message": "Login successful"})
    return jsonify({"status": "fail", "message": "Invalid credentials"}), 401

if __name__ == '__main__':
    app.run(port=5000)
