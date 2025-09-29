# Th3ee Website — React + Flask + MongoDB

This project is a basic authentication system built with:

* **React (frontend):** Handles the user interface, forms, and API requests.
* **Flask (backend):** Provides signup and login endpoints.
* **MongoDB (database):** Stores users with encrypted passwords.

It serves as a lightweight starter template for building full-stack applications with secure user authentication.

## How it Works

1. **Signup**

   * User submits phone number and password.
   * The password is hashed using **bcrypt** before being stored in MongoDB.
   * If the phone number already exists, the request is rejected.

2. **Login**

   * User submits phone number and password.
   * The backend verifies the phone number and compares the password against the stored bcrypt hash.
   * Returns success or an error response.

3. **Frontend and Backend Communication**

   * React uses Axios to send requests to `http://localhost:5000/signup` and `/login`.
   * Flask has **CORS enabled** to allow requests from the React dev server during local development.

## Running Locally

### Prerequisites

* Node.js 18 or higher
* Python 3.10 or higher
* MongoDB running locally on `mongodb://localhost:27017`

### Backend Setup

```bash
pip install -r requirements.txt
python app.py      # Starts Flask API on http://localhost:5000
```

### Frontend Setup

```bash
npm install
npm run dev        # Starts React app using Vite dev server
```
## Data Model

MongoDB `users` collection:

```json
{
  "phone": "string",
  "password": "bcrypt hash"
}
```
## Security Notes

* Passwords are never stored in plaintext.
* For production environments:

  * Use environment variables for MongoDB URI and Flask configuration.
  * Restrict CORS to trusted frontend domains.
  * Enable HTTPS, input validation, and rate limiting.
  * Consider using JWT tokens for session management.
