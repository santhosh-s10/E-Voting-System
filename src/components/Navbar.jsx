import React from 'react'
import logo from '../assets/election-logo.png'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div id='navbar-div'>
            <ul id='nav-first-part' style={{display:'flex', alignItems:'center'}}>
                <li>
                    <img src={logo} alt="insta" style={{height:'30px', width:'30px'}} />
                    <p style={{color:'white', fontSize:'20px'}}>One Vote One Nation</p>
                </li>
            </ul>
            <ul id='nav-second-part' style={{display:'flex', gap:'20px', alignItems: 'center', paddingRight: '20px' }}>
                <li>Home</li>
                <li>Profile</li>
                <li>Message</li>
                <li>Notification</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar