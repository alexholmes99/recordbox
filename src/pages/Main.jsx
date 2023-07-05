import styled from "styled-components";
import Logo from "../components/Logo";
import Record from "../components/Record";

function Main() {
  return (
    <Container>
      <RecordContainer>
        <Record />
      </RecordContainer>
    </Container>
  );
}
const RecordContainer = styled.div`
  margin-left: 15%;
  margin-right: 10%;
  margin-bottom: 10%;
  padding: 0;
`;
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: limegreen;
`;

export default Main;
