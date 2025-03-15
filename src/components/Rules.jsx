import React from 'react';
import voterId from '../assets/voter-logo.webp';
import rule1 from '../assets/rule-1.webp'
import rule2 from '../assets/rule-2.jpg'
import rule3 from '../assets/rule-3.png'
import rule4 from '../assets/rule-4.webp'
import { Link } from 'react-router-dom';

const Rules = () => {
  return (
    <div id="rules-container">
      {/* Title */}
      <h1 id="rules">Rules and Regulations</h1>

      {/* Subheading */}
      <div id="rules-subheading">
        <h2>ECI Code of Conduct</h2>
        <p>
          Please read these rules and guidelines set by the Election Commission of India (ECI) carefully before proceeding.
        </p>
      </div>


      {/* Rules List (One by One) */}

      <div id="rules-list">
          <div className="rule-card">
            <img src={rule1} alt="Voter-Id" />
            <p>Voter must have registered for Voter ID or possess a valid one to be eligible to vote.</p>
          </div>
          <div className="rule-card">
            <img src={rule2} alt="Voter-Id" />
            <p>Each voter is allowed to cast their vote only once. Multiple voting will lead to action.</p>
          </div>
          <div className="rule-card">
            <img src={rule3} alt="Voter-Id" />
            <p>All personal details provided during the verification process must be accurate.</p>
          </div>
          <div className="rule-card">
            <img src={rule4} alt="Voter-Id" />
            <p>Your Voting session must be completed within the given time frame to avoid any disruptions.</p>
          </div>
      </div>


      {/* Buttons */}
      <div id="button-container">
        <Link to='/voteridregister'><button className="rules-understand-btn">I Understand</button></Link>
      </div>

    </div>
  );
};

export default Rules;
