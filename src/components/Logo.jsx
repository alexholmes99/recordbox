import styled from "styled-components";
import "../assets/fonts/fonts.css";

function Logo() {
  return <LogoContainer>RecordBox</LogoContainer>;
}

const LogoContainer = styled.div`
  font-family: "Bubblegum Sans", cursive;
  font-size: 60px;
  font-weight: 700;
  color: #ff4545;
  text-shadow: 2px 4px white;
`;

export default Logo;
