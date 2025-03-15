import React from 'react';
import logo1 from '../assets/logo 1.png';
import { Link } from 'react-router-dom';

const FinishVoting = () => {
  return (
    <div id="finish-vote-container">
      {/* Header */}
      <header id="finish-vote-headings">
        <h1>VoteBlock</h1>
        <p>Creating a better India</p>
      </header>

      {/* Main Content */}
      <main id="finish-vote-content">
        {/* Candidate Info */}
        <section id="finish-vote-candidate-data">
          <img src={logo1} alt="candidate logo" id="finish-vote-candidate-logo" />
          <div id="finish-vote-candidate-content">
            <h3>Narendra Damodardas Modi</h3>
            <p>Bharatiya Janata Party</p>
          </div>
        </section>

        {/* Vote Submission Confirmation */}
        <section id="finish-vote-submit-content">
          <h3>Your vote has been submitted</h3>
          <p>
            Your vote has been successfully cast. All votes will now undergo a two-step verification
            process to ensure integrity before being officially counted. Thank you for voting!
          </p>
          <Link to="/voteregistered">
            <button id="finish-vote-submit-btn">Finish Voting</button>
          </Link>
        </section>
      </main>
    </div>
  );
};

export default FinishVoting;
