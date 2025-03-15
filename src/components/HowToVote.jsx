import React from 'react'
import { FaIdCard, FaPerson } from "react-icons/fa6";
import { BsPersonFillCheck } from "react-icons/bs";
import { IoPerson } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';


const HowToVote = () => {
  return (
    <div>
        <div id='howToVote-title'>
            <h1>How to Vote?</h1>
        </div>
        <div id='voting-steps'>
            <h2>Steps of voting process</h2>
            <p>Please carefully follow the instructions as listed below. Any irregularities or violations may result in appropriate legal consequences under the ECI code of conduct.</p>
            <p>You cannot go back until after completion of voting process.</p>
        </div>

        <div id='voting-step-containers'>
            <div id='voter-id-details-container'>
                <div>
                    <FaIdCard id='voter-id-icon'/>
                </div>
                <div id='details'>
                    <h3>Enter Voter ID Details</h3>
                    <p>Keep your voter ID handy at all times</p>
                </div>
            </div>

            <div id='verify-your-identity-container'>
                <div>
                    <BsPersonFillCheck id='verify-icon'/>
                </div>
                <div id='details'>
                    <h3>Verify your identity</h3>
                    <p>Voters will undergo photo verification</p>
                </div>
            </div>

            <div id='pick-your-candidate-container'>
                <div>
                    <IoPerson id='person-icon'/>
                </div>
                <div id='details'>
                    <h3>Pick your candidate</h3>
                    <p>Go through the list of candidates</p>
                </div>
            </div>

            <div id='confirm-your-vote-container'>
                <div>
                    <FaCheckCircle id='confirm-icon'/>
                </div>
                <div id='details'>
                    <h3>Confirm your vote</h3>
                    <p>Please confirm receipt of E-certificate</p>
                </div>
            </div>
        </div>

        <div id='understand-div'>
            <Link to='/verifyvote'><input type="button" name="" id="understand-btn" value={"I Understand"} /></Link>
            <p id='back-to-home'>Go back to homepage</p>
        </div>
    </div>
  )
}

export default HowToVote