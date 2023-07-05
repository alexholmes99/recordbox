import styled from "styled-components";
import React from "react";

function Record() {
  return <Img src={require("../assets/images/record.png")} alt="Record" />;
}

const Img = styled.img`
  &:hover {
    animation: rotation 2s infinite linear;
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
