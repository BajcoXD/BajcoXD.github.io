from flask import Flask, request, jsonify # type: ignore
from flask_cors import CORS # type: ignore
import smtplib
import os

app = Flask(__name__)
CORS(app)  # allow cross-origin requests (from your HTML at port 5500)

@app.route("/send-email", methods=["POST"])
def send_email():
    name = request.form.get("name")
    email = request.form.get("email")
    message = request.form.get("message")

    sender = "bajcoviktor@gmail.com"
    password = os.getenv("EMAIL_PASSWORD")
    receiver = "bajcoviktor@gmail.com"

    try:
        with smtplib.SMTP("smtp.gmail.com", 587) as server:
            server.starttls()
            server.login(sender, password)
            subject = f"New message from {name}"
            body = f"From: {email}\n\nMessage:\n{message}"
            msg = f"Subject: {subject}\n\n{body}"
            server.sendmail(sender, receiver, msg)

        response = jsonify({"success": True, "message": "Email sent successfully!"})
        response.headers["Content-Type"] = "application/json"
        return response, 200

    except Exception as e:
        print("Full error:", e)
        response = jsonify({"success": False, "message": f"Failed to send email: {e}"})
        response.headers["Content-Type"] = "application/json"
        return response, 500


if __name__ == "__main__":
    app.run(debug=True)
