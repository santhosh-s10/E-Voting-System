import React from 'react'

const VoterIdRegister = () => {
  return (
    <div>
        <div id='voter-register'>
            <div id='top-voterId-register'>
                <h1>MyVote</h1>
                <p>Creating a better India</p>
            </div>
            <div id='bottom-voterId-register'>
                <h2 id='hello-voters'>Hello!</h2>
                <p>Please enter your 10-digit voter ID</p>
                <input type="text" placeholder='Eg: ABC1234567' id='voterId-input' />
                <br />
                <input type="button" value={"Generate OTP"} id='generate-btn' />
                <p id='register-voterId'>Register for Voter ID</p>
            </div>
        </div>
    </div>
  )
}

export default VoterIdRegister