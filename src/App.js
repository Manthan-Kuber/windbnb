import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <GlobalStyles />
      <MainContainer>
        <Header/>
      </MainContainer>
    </>
  );
}

export default App;

const MainContainer = styled.main`
  padding-inline:1.5rem;
  padding-block: 2rem;

  @media (min-width: 40em){
    padding-inline:9rem;
    padding-block:5rem;
  }
`
