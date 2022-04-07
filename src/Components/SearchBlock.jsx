import React, { useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import SearchModal from "./SearchModal";
import { SearchContainer, SearchInputs } from "./Header.styles";
import { SearchContext } from "../App";

const SearchBlock = () => {
  const searchContext = useContext(SearchContext);
  return (
    <>
      <SearchContainer onClick={() => searchContext.dispatch({ type: "toggleModal" })}>
        <SearchInputs
          placeholder="Add Location"
          readOnly
          value={searchContext.location}
        />
        <SearchInputs placeholder="Add Guests" readOnly value={searchContext.guests} />
        <AiOutlineSearch
          className="search-icon"
          color="var(--clr-primary)"
          size="20px"
        />
      </SearchContainer>
      {searchContext.isModalOpen && <SearchModal />}
    </>
  );
};

export default SearchBlock;
