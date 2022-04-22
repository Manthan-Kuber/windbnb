import GlobalStyles from "./GlobalStyles";
import Header from "./Components/Header";
import MainContent from "./Components/MainContent";
import { createContext, useReducer } from "react";
import { MainWrapper, MainContainer, Footer, FooterText } from "./App.styles";

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
          searchTerm: state.searchTerm,
          counter1: state.counter1,
          counter2: state.counter2,
          dispatch: dispatch,
        }}
      >
        <MainWrapper>
          <Header />
          <MainContainer>
            <MainContent />
          </MainContainer>
        </MainWrapper>
        <Footer>
          <FooterText>
            Created by{" "}
            <b>
              <u>Manthan Kuber</u>
            </b>
          </FooterText>
        </Footer>
      </SearchContext.Provider>
    </>
  );
}

export default App;
