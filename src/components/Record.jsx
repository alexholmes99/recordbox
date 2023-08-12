import styled from "styled-components";
import React, { useState } from "react";
import Sound from "react-sound";
import SutureFuture from "../assets/music/suturefuture.mp3";

function Record() {
  const [sound, setSound] = useState(Sound.status.STOPPED);

  return (
    <RecordContainer>
      <Sound url={SutureFuture} playStatus={sound} />
      <Img
        onMouseEnter={() => setSound(Sound.status.PLAYING)}
        onMouseLeave={() => setSound(Sound.status.PAUSED)}
        src={require("../assets/images/record.png")}
        alt="Record"
      />
    </RecordContainer>
  );
}

const RecordContainer = styled.div`
  width: 50%;
  height: 50%;
`;

const Img = styled.img`
  &:hover {
    animation: rotation 1.5s infinite linear;
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;
export default Record;
