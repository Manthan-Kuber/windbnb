import React, { createContext, useReducer } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import SearchModal from "./SearchModal";
import { SearchContainer, SearchInputs } from "./Header.styles";

const initialState = { isModalOpen: false, location: "", guests: "" };

export const SearchContext = createContext(initialState);

const searchReducer = (state, action) => {
  switch (action.type) {
    case "toggleModal":
      return { ...state, isModalOpen: !state.isModalOpen };
    case "locationChangeHandler":
      return { ...state, location: action.payload };

    case "guestChangeHandler":
      return { ...state, guests: action.payload };
    default:
      throw new Error();
  }
};

const SearchBlock = () => {
  const [state, dispatch] = useReducer(searchReducer, initialState);
  return (
    <>
      <SearchContainer onClick={() => dispatch({ type: "toggleModal" })}>
        <SearchInputs
          placeholder="Add Location"
          readOnly
          value={state.location}
        />
        <SearchInputs placeholder="Add Guests" readOnly value={state.guests} />
        <AiOutlineSearch
          className="search-icon"
          color="var(--clr-primary)"
          size="20px"
        />
      </SearchContainer>
      {state.isModalOpen && (
        <SearchContext.Provider
          value={{
            isModalOpen: state.isModalOpen,
            location: state.location,
            guests: state.guests,
            dispatch: dispatch,
          }}
        >
          <SearchModal />
        </SearchContext.Provider>
      )}
    </>
  );
};

export default SearchBlock;
