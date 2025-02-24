import React from 'react'

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

        <div id=''>
            <div id='voter-no-div'>
                <p>Voter ID Number</p>
                <input type="text" placeholder='0123456789' id='voter-id-input'/>
            </div>
            <div id='date-of-birth-div'>
                <p>Date of Birth (As Written on Aadhar)</p>
                <input type="date" id='date-input'/>
            </div>
            <div id='verify-btn-div'>
                <input type="button" name="" id="verify-btn" value={"Verify Details"}/>
            </div>
        </div>
    </div>
  )
}

export default VerifyVoterId