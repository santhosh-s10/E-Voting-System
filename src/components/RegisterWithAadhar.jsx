import React from 'react'

const RegisterWithAadhar = () => {
  return (
    <div>
        <div id='register-with-aadhar-main-div'>
            <div id='aadhar-register-div'>
                <h1>Register with Aadhar</h1>
                <h2>Verify Government Proof</h2>
                <p>Please enter your Aadhar Card number for the registration process. <br /> A One Time Password (OTP) will be sent to you for confirmation </p>
            </div>

            <div id='aadhar-number-div'>
                <p id='aadhar-number'>Enter your 12-digit Aadhar Card Number</p>
                <input type="text" name="" id="aadhar-number-input" placeholder='1234 5678 9101' />
                <p id='digilocker'>Import from Digilocker</p>
            </div>

            <div id='proceed-voterId'>
                <input type="button" value={"Register for Voter ID"} />
            </div>
        </div>
    </div>
  )
}

export default RegisterWithAadhar