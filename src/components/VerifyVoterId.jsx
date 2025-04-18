import React from 'react'
import { Link } from 'react-router-dom'

const VerifyVoterId = () => {
  return (
    <div>
      <div>
        <h1 id='verify-title'>Verify Voter ID</h1>
      </div>

      <div id='verify-para-div'>
        <h2>Voter ID Verification</h2>
        <p>To proceed with the voting process, please enter your Voter ID and Date of Birth as listed on your official documents. This information will be used to verify your identity and ensure the integrity of your vote.</p>
      </div>

      {/* Wrapped in the new verify-box */}
      <div id='verify-box'>
        <div id='voter-no-div'>
          <p>Voter ID</p>
          <input type="text" placeholder='Enter your Voter ID number' id='voter-id-input' />
        </div>

        <div id='date-of-birth-div'>
          <p>Date of Birth (As Written on Aadhar)</p>
          <input type="date" id='date-input' />
        </div>

        <div id='verify-btn-div'>
          <Link to='/candidates'>
            <input type="button" id="verify-btn" value="Verify Details" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default VerifyVoterId
