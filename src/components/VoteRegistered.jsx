import React from 'react'
import { MdVerifiedUser } from "react-icons/md";
import { Link } from 'react-router-dom';

const VoteRegistered = () => {
  return (
    <div id='vote-registered-container'>
        <header id="vote-registered-headings">
          <h1>VoteBlock</h1>
          <p>Creating a better India</p>
        </header>

        <div>
          <MdVerifiedUser id='verify-tick-icon'/>
          <p>Vote Registered</p>
          <p>Thank you for voting via VoteBlock!</p>
          <Link to='/'><input type="button" name="" id="back-to-home-btn" value={'Back to homepage'}/></Link>
        </div>
    </div>
  )
}

export default VoteRegistered