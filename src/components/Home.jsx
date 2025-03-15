import React from 'react';
import india from '../assets/India.jpg';
import profile from '../assets/profile.png';
import polling from '../assets/polling.svg';
import { FaHandPointDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Rules from './Rules';
import InformationCenter from './InformationCenter';

const Home = () => {
  return (
    <div>
    <div id="home-container">
      {/* India Image - Appears First */}
      <div id="image-container">
        <img src={india} alt="India" id="india-img" />
      </div>

      <div>
        <div style={{display: 'flex'}}>
          <p id='new-voter-register-para'>New Voter's register here</p> <FaHandPointDown id='hand-icon'/>
          </div>
        <Link to='/rules'><input type="button" id='new-voter-register-btn' value={'Register'} /></Link>
        <p id='login-voter-id'>Already register <Link to='/voteridregister' id='login-here'>Login here</Link></p>
      </div>
      </div>

      <InformationCenter />
    </div>
  );
};

export default Home;
