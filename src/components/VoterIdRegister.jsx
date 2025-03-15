import React from 'react'
import { Link } from 'react-router-dom'

const VoterIdRegister = () => {
  return (
    <div>
        <div id='voter-register'>
            <div id='top-voterId-register'>
                <h1>VoteBlock</h1>
                <p>Creating a better India</p>
            </div>
            <div id='bottom-voterId-register'>
                <h2 id='hello-voters'>Hello!</h2>
                <p>Please enter your 10-digit voter ID</p>
                <input type="text" placeholder='Eg: ABC1234567' id='voterId-input' required/>
                <br />
                <Link to='/afterhome'><input type="button" value={"Generate OTP"} id='generate-btn' /></Link>
                <p><Link to='/register' id='register-voterId'>Register for Voter ID</Link></p>
            </div>
        </div>
    </div>
  )
}

export default VoterIdRegister