import React from 'react'
import voterId from '../assets/voter-logo.webp'

const Rules = () => {
  return (
    <div>
        <div>
            <h1 id='rules'>Rules and Regulations</h1>
        </div>
        <div id='rules-subheading'>
            <h2>ECI Code of Conduct</h2>
            <p>Please read these rules and guidelines set by the Election Commission of India (ECI) carefully before proceeding.</p>
        </div>
        <div id='rules-div'>
            <div id='rule1'>
                <img src={voterId} alt="Voter-Id" />
                <p>Voter must have registered for Voter ID or possess a valid one to be eligible to vote.</p>
            </div>
            <div id='rule1'>
                <img src={voterId} alt="Voter-Id" />
                <p>Voter must have registered for Voter ID or possess a valid one to be eligible to vote.</p>
            </div>
            <div id='rule1'>
                <img src={voterId} alt="Voter-Id" />
                <p>Voter must have registered for Voter ID or possess a valid one to be eligible to vote.</p>
            </div>
            <div id='rule1'>
                <img src={voterId} alt="Voter-Id" />
                <p>Voter must have registered for Voter ID or possess a valid one to be eligible to vote.</p>
            </div>
        </div>
        <div id='checkboxBtn'>
            <input type="checkbox" name='' value="" />
            <label htmlFor="">I understand and will follow above steps.</label>
        </div>
        <div id='proceed-div'>
            <input type="button" name="" id="cancelProceed" value={"Cancel"} />
            <input type="button" name="" id="cancelProceed" value={"Proceed"} />
        </div>
    </div>
  )
}

export default Rules