import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import Header from "./Components/Header";
import MainContent from "./Components/MainContent";
import { createContext, useReducer } from "react";

const initialState = {
  isModalOpen: false,
  location: "",
  searchTerm: "",
  guests: 0,
  counter1: 0,
  counter2: 0,
};

export const SearchContext = createContext(initialState);

const searchReducer = (state, action) => {
  switch (action.type) {
    case "toggleModal":
      return { ...state, isModalOpen: !state.isModalOpen };
    case "locationChangeHandler":
      return { ...state, location: action.payload };
    case "guestChangeHandler":
      return { ...state, guests: action.payload };
    case "incGuests":
      return {
        ...state,
        guests: state.guests + 1,
      };
    case "decGuests":
      return {
        ...state,
        guests: state.guests !== 0 ? state.guests - 1 : state.guests,
      };
    case "setSearchTerm":
      return { ...state, searchTerm: action.payload };
    case "incCounter1":
      return { ...state, counter1: state.counter1 + 1 };
    case "incCounter2":
      return { ...state, counter2: state.counter2 + 1 };
    case "decCounter1":
      return {
        ...state,
        counter1: state.counter1 !== 0 ? state.counter1 - 1 : state.counter1,
      };
    case "decCounter2":
      return {
        ...state,
        counter2: state.counter2 !== 0 ? state.counter2 - 1 : state.counter2,
      };
    case "handleCounter1Change":
      return { ...state, counter1: action.payload };
    case "handleCounter2Change":
      return { ...state, counter2: action.payload };
    default:
      throw new Error();
  }
};

function App() {
  const [state, dispatch] = useReducer(searchReducer, initialState);
  return (
    <>
      <GlobalStyles />
      <SearchContext.Provider
        value={{
          isModalOpen: state.isModalOpen,
          location: state.location,
          guests: state.guests,
          dispatch: dispatch,
        }}
      >
        <MainWrapper>
          <Header />
          <MainContainer>
            <MainContent />
          </MainContainer>
        </MainWrapper>
      </SearchContext.Provider>
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
