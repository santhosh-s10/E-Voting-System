import { useState } from 'react'
import Rules from './components/Rules'
import VoterIdRegister from './components/VoterIdRegister'
import RegisterWithAadhar from './components/RegisterWithAadhar'
import Home from './components/Home'
import Navbar from './components/Navbar'
import InformationCenter from './components/InformationCenter'
import HowToVote from './components/HowToVote'
import VerifyVoterId from './components/VerifyVoterId'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import AfterHome from './components/AfterHome'
import VoterProfile from './components/VoterProfile'
import ListOfCandidate from './components/ListOfCandidate'
import CandidateProfile from './components/CandidateProfile'
import FinishVoting from './components/FinishVoting'
import VoteRegistered from './components/VoteRegistered'
import OtpVerification from './components/OtpVerification'


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='rules' element={<Rules />} />
          <Route path='register' element={<RegisterWithAadhar />} />
          <Route path='afterhome' element={<AfterHome />}>
            <Route path='informationcenter' element={<InformationCenter />} />
          </Route>
          <Route path='voteridregister' element={<VoterIdRegister />} />
          <Route path='profile' element={<VoterProfile />} />
          <Route path='vote' element={<HowToVote />} />
          <Route path='verifyvote' element={<VerifyVoterId />} />
          <Route path='candidates' element={<ListOfCandidate />} />
          <Route path='candidateprofile' element={<CandidateProfile />} />
          <Route path='finishvoting' element={<FinishVoting />} />
          <Route path='voteregistered' element={<VoteRegistered />} />
          <Route path='otpverify' element={<OtpVerification />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
