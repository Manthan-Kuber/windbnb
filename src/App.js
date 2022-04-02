import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <GlobalStyles />
      <MainWrapper>
        <Header />
        <MainContainer>
          
        </MainContainer>
      </MainWrapper>
      
    </>
  );
}

export default App;

const MainWrapper = styled.div`
  padding-inline: 1.5rem;
  padding-block: 2rem;

  @media (min-width: 45em) {
    padding-inline: 9rem;
    padding-block: 5rem;
  }
`;

const MainContainer = styled.main`
  margin-top: 4rem;

  @media (min-width: 40em) {
    margin-top: 7rem;
  }
`;
