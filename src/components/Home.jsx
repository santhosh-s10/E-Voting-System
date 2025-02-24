import React from 'react'
import india from '../assets/India.jpg'
import profile from '../assets/profile.png'
import polling from '../assets/polling.svg'

const Home = () => {
  return (
    <div>
        <div id='home-containers'>
            <div id='container-1'>
                <img src={india} alt="" id='india-img' />
            </div>
            <div id='container-2'>
                <div id='profile-div'>
                    <div id='profile-img'>
                        <img src={profile} alt="" />
                    </div>
                    <div id='profile-name'>
                        <p id='names'>Ashutosh Parashar</p>
                        <p id='voter-id'>Voter ID: ABC1234567</p>
                    </div>
                </div>
                <div id='constituency-status'>
                    <div id='constituency-div'>
                        <p id='constituency'>Voting Constituency</p>
                        <p id='place'>Salem</p>
                    </div>
                    <div id='status-div'>
                        <p id='status'>Status</p>
                        <p id='status-value'>Registered</p>
                    </div>
                </div>
        <div id='polling-div'>
                <h3>Polling closes in: </h3>
                <p>08:45:57</p>
                <img src={polling} alt="" />
            </div>
            </div>
        </div>


    </div>
  )
}

export default Home