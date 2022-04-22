import React, { useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import SearchModal from "./SearchModal";
import { SearchContainer, SearchInputs } from "./Header.styles";
import { SearchContext } from "../App";
import { AnimatePresence } from "framer-motion";

const SearchBlock = () => {
  const searchContext = useContext(SearchContext);
  return (
    <>
      <SearchContainer
        onClick={() => searchContext.dispatch({ type: "toggleModal" })}
      >
        <SearchInputs
          placeholder="Add Location"
          readOnly
          value={searchContext.location}
        />
        <SearchInputs
          placeholder="Add Guests"
          readOnly
          value={searchContext.guests === 0 ? "" : searchContext.guests}
        />
        <AiOutlineSearch
          className="search-icon"
          color="var(--clr-primary)"
          size="20px"
        />
      </SearchContainer>
      {/* Animate Presence is disrupted when isModal open is set to false & is
      unmounted when wrapped around SearchModal so must wrap around here */}
      <AnimatePresence>
        {searchContext.isModalOpen && <SearchModal />}
      </AnimatePresence>
    </>
  );
};

export default SearchBlock;
