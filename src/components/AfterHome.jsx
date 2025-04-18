import React from 'react'
import profile from '../assets/profile.png'
import polling from '../assets/polling.svg'
import InformationCenter from './InformationCenter'
import Navbar from './Navbar'

const AfterHome = () => {
  return (
    <div>

      <Navbar />

    <div id='after-home-container'>
      {/* Content Blocks */}
      <div id="profile-content-container">
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