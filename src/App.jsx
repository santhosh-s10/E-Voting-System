import { useState } from 'react'
import Rules from './components/Rules'
import VoterIdRegister from './components/VoterIdRegister'
import RegisterWithAadhar from './components/RegisterWithAadhar'
import Home from './components/Home'
import Navbar from './components/Navbar'
import InformationCenter from './components/InformationCenter'
import HowToVote from './components/HowToVote'
import VerifyVoterId from './components/VerifyVoterId'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Rules /> */}
      {/* <VoterIdRegister /> */}
      {/* <RegisterWithAadhar /> */}
      {/* <Navbar /> */}
      {/* <Home /> */}
      {/* <InformationCenter /> */}
      {/* <HowToVote /> */}
      <VerifyVoterId />
    </>
  )
}

export default App
