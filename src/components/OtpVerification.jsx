import React, { useState } from "react";
import { Link } from "react-router-dom";

const OtpVerification = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [resendDisabled, setResendDisabled] = useState(false);
  const [timer, setTimer] = useState(30);

  // Handle OTP input change
  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]?$/.test(value)) {
      let newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to next input
      if (value !== "" && index < 5) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  // Handle Resend OTP
  const handleResendOtp = () => {
    if (!resendDisabled) {
      setResendDisabled(true);
      setTimer(30);

      const countdown = setInterval(() => {
        setTimer((prev) => {
          if (prev === 1) {
            clearInterval(countdown);
            setResendDisabled(false);
          }
          return prev - 1;
        });
      }, 1000);
    }
  };

  return (
    <div className="otp-container">
      <h1>Verification</h1>
      <h3>One Time Password (OTP)</h3>

      {/* OTP Input Boxes */}
      <div className="otp-inputs">
        {otp.map((digit, index) => (
          <input
            key={index}
            id={`otp-input-${index}`}
            type="text"
            value={digit}
            maxLength="1"
            onChange={(e) => handleChange(e, index)}
          />
        ))}
      </div>

      {/* Resend OTP Text */}
      <p className="resend-text" onClick={handleResendOtp}>
        {resendDisabled ? `Resend OTP in ${timer}s` : "Resend OTP"}
      </p>

      {/* Proceed Button */}
      <Link to="/afterhome">
        <button className="proceed-btn">Proceed</button>
      </Link>
    </div>
  );
};

export default OtpVerification;
