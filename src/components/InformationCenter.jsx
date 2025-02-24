import React from 'react'
import { TbSpeakerphone } from "react-icons/tb";
import { FaPlayCircle } from "react-icons/fa";


const InformationCenter = () => {
  return (
    <div>
        <div>
            <h1 id='information-title'>Information Center</h1>
        </div>
        <div id='information-containers'>
            <div id='important-notice'>
                <TbSpeakerphone id='notice'/>
                <p id='notice-subTitle'>Important Notice</p>
                <p>Please ensure registration on the electoral roll before voting</p>
            </div>

            <div id='important-notice'>
                <TbSpeakerphone id='notice'/>
                <p id='notice-subTitle'>Important Notice</p>
                <p>Please ensure registration on the electoral roll before voting</p>
            </div>

            <div id='important-notice'>
                <TbSpeakerphone id='notice'/>
                <p id='notice-subTitle'>Important Notice</p>
                <p>Please ensure registration on the electoral roll before voting</p>
            </div>
        </div>

        <div id='vote-instruction'>
            <div id='instruction-div'>
                <h2>How to use MyVote? </h2>
                <p>Watch an instructional video</p>
            </div>
            <div>
                <FaPlayCircle id='video-icon' />
            </div>
        </div>
    </div>
  )
}

export default InformationCenter