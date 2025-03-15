import React from 'react'
import profile from '../assets/profile.png'
import { BsPersonFillCheck } from 'react-icons/bs'
import { HiDocumentCheck } from "react-icons/hi2";
import { FaIdCard } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { MdLiveHelp } from "react-icons/md";



const VoterProfile = () => {
  return (
    <div>
      <div id="voter-profile-section">
        <div id="voter-profile-img">
          <img src={profile} alt="Profile" />
        </div>
        
        <div id="voter-profile-info">
          <p id="voter-profile-name">Ashutosh Parashar</p>
          <p id="voter-profile-id">Voter ID: ABC1234567</p>
        </div>
      </div>

      <div id="profile-voting-status">
          <div className="profile-status-box">
            <p className="profile-status-title">Voting Constituency</p>
            <p className="profile-status-detail">Rasipuram</p>
          </div>
          <div className="profile-status-box">
            <p className="profile-status-title">Status</p>
            <p className="profile-status-detail registered">Registered</p>
          </div>
        </div>

        <div>
          <div id='registration-status'>
            <div>
                <HiDocumentCheck id='registration-icon'/>
            </div>
            <div id='registration-details'>
                <h3>Registration Status</h3>
                <p>Voter ID Registration, ECI website</p>
            </div>
          </div>

          <div id='voter-documents'>
            <div>
                <FaIdCard id='voter-documents-icon'/>
            </div>
            <div id='voter-documents-details'>
                <h3>Voter Documents</h3>
                <p>Address Proof, Voter ID, Age Proof etc.,</p>
            </div>
          </div>

          <div id='privacy-security'>
            <div>
                <MdOutlineSecurity id='privacy-security-icon'/>
            </div>
            <div id='privacy-security-details'>
                <h3>Privacy and Security</h3>
                <p>Data Collection, Modify Permissions</p>
            </div>
          </div>

          <div id='settings'>
            <div>
                <IoSettings id='settings-icon'/>
            </div>
            <div id='settings-details'>
                <h3>Settings</h3>
                <p>Accessibility, Notifications</p>
            </div>
          </div>

          
          <div id='help-support'>
            <div>
                <MdLiveHelp id='help-support-icon'/>
            </div>
            <div id='help-support-details'>
                <h3>Help & Support</h3>
                <p>FAQs, Voter enquiries</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default VoterProfile