import React from 'react'
import india from '../assets/India.jpg'
import profile from '../assets/profile.png'
import polling from '../assets/polling.svg'
import InformationCenter from './InformationCenter'

const AfterHome = () => {
  return (
    <div>
    <div id='home-container'>
         {/* India Image - Appears First */}
              <div id="image-container">
                <img src={india} alt="India" id="india-img" />
              </div>
                    {/* Content Blocks */}
      <div id="content-container">
        {/* Profile Section */}
        <div id="profile-section">
          <div id="profile-img">
            <img src={profile} alt="Profile" />
          </div>
          <div id="profile-info">
            <p id="name">Ashutosh Parashar</p>
            <p id="voter-id">Voter ID: ABC1234567</p>
          </div>
        </div>

        {/* Voting Constituency & Status */}
        <div id="voting-status">
          <div className="status-box">
            <p className="status-title">Voting Constituency</p>
            <p className="status-detail">Rasipuram</p>
          </div>
          <div className="status-box">
            <p className="status-title">Status</p>
            <p className="status-detail registered">Registered</p>
          </div>
        </div>

        {/* Polling Info */}
        <div id="polling-section">
          <h3>Polling closes in:</h3>
          <p>08:45:57</p>
          <img src={polling} alt="Polling" />
        </div>
      </div>
      </div>
      
      <InformationCenter />
    </div>
  )
}

export default AfterHome