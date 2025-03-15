import React from 'react';
import { TbSpeakerphone } from "react-icons/tb";
import { FaPlayCircle } from "react-icons/fa";

const InformationCenter = () => {
  return (
    <div id="info-center">
      {/* Title */}
      <h1 id="information-title">Information Center</h1>

      {/* Important Notices */}
      <div id="information-containers">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="important-notice">
            <TbSpeakerphone className="notice-icon" />
            <p className="notice-subTitle">Important Notice</p>
            <p>Please ensure registration on the electoral roll before voting</p>
          </div>
        ))}
      </div>

      {/* Voting Instructions */}
      <div id="vote-instruction">
        <div id="instruction-div">
          <h2>How to use MyVote?</h2>
          <p>Watch an instructional video</p>
        </div>
        <FaPlayCircle id="video-icon" />
      </div>
    </div>
  );
};

export default InformationCenter;
