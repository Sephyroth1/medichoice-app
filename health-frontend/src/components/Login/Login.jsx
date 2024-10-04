import React from "react";

export default function Login() {
  return (
    <>
      <h1>Login</h1>
      <div className="aadhar">
        <h1>Signup</h1>
        <input type="number" name="aadhar" id="aadhar" />
        <input type="submit" />
      </div>
      <div className="mobileNumber">
        <input type="number" name="mobile-number" id="mobile-number" />
        <input type="submit" />
      </div>
    </>
  );
}
