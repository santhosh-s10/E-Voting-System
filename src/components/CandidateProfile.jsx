import React from "react";
import candidate1 from "../assets/candidate 1.avif";
import logo1 from "../assets/logo 1.png";
import { Link } from "react-router-dom";

const CandidateProfile = () => {
  return (
    <div id="candidate-container">
      <h1>Candidate Profile</h1>

      {/* Candidate Profile Section */}
      <div id="candidate-profile">
        <img src={candidate1} alt="parliament" id="candidate-img" />

        <div id="candidate-data">
          <img src={logo1} alt="candidate logo" id="candidate-logo" />
          <div id="candidate-content">
            <h3>Narendra Damodardas Modi</h3>
            <p>Bharatiya Janata Party</p>
          </div>
        </div>
      </div>

      {/* About the Candidate */}
      <div id="about-candidate">
        <h3>About the Candidate</h3>
        <p>
          Narendra Modi is the current Prime Minister of India, in office since
          2014, and a member of the Bharatiya Janata Party (BJP). He is
          recognized for key initiatives like "Make in India," "Digital India,"
          and "Swachh Bharat," aiming to improve infrastructure and economic
          growth. Modi's leadership focuses on governance reforms and empowering
          rural and underprivileged communities.
        </p>
      </div>

      {/* Proposed Policies */}
      <div id="proposed-policies">
        <h3>Proposed Policies</h3>
        <ul>
          <li>Every individual and the government must adhere to their duties to uphold the nation's progress.</li>
          <li>Aimed at fostering regional and community-based growth aligned with the vision of Sabka Saath, Sabka Vikas.</li>
          <li>Modi emphasized the need to reject social acceptance of corruption.</li>
          <li>Citizens were urged to respect India’s laws, regulations, and heritage while shedding colonial mindsets.</li>
          <li>Modi reaffirmed commitment to existing reservations but called for resistance against introducing religion-based quotas.</li>
        </ul>
      </div>

      {/* Submit Vote Button */}
      <div id="vote-btn-container">
        <Link to="/finishvoting">
          <button id="submit-vote-btn">Submit Vote</button>
        </Link>
      </div>
    </div>
  );
};

export default CandidateProfile;
