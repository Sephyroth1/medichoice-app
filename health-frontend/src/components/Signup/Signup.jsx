import React, { useState } from "react";

export default function Signup() {
  const [hide, setHide] = useState(false);

  const handleAadharClick = () => {
    setHide(true);
  };

  const handleMobileClick = () => {
    setHide(false);
  }
  return (
    <>
      <h1>Signup</h1>
      <button onClick={handleAadharClick}>Aadhar Number Login</button>
      <button onClick={handleMobileClick}>Mobile Number Login</button>
      {hide ? (
        <div className="aadhar">
          <input type="number" name="aadhar" id="aadhar" placeholder="Enter your aadhar number"/>
          <input type="submit" />
        </div>
      ) : (
        <div className="mobileNumber">
          <input type="number" name="mobile-number" id="mobile-number" placeholder="Enter your mobile number"/>
          <input type="submit" />
        </div>
      )}
    </>
  );
}
