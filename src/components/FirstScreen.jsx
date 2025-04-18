import React from 'react';
import india from '../assets/India.jpg';
import { Link } from 'react-router-dom';

const FirstScreen = () => {
  return (
    <div className="first-screen-container">
      <div className="content-wrapper">
        <img src={india} alt="india" className="india-logo" />
        <Link to="/rules">
          <button className="proceed-btn">Proceed to VoteBlock</button>
        </Link>
      </div>
    </div>
  );
};

export default FirstScreen;
