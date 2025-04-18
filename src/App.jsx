import { useState } from 'react'
import Rules from './components/Rules'
import VoterIdRegister from './components/VoterIdRegister'
import RegisterWithAadhar from './components/RegisterWithAadhar'
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
import Result from './components/Result'
import FirstScreen from './components/FirstScreen'


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<FirstScreen />} />
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
          <Route path='result' element={<Result />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
