import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import SearchModal from "./SearchModal";
import { SearchContainer,SearchInputs } from "./Header.styles";

const SearchBlock = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <SearchContainer onClick={() => setIsModalOpen(true)}>
        <SearchInputs placeholder="Add Location" readOnly />
        <SearchInputs placeholder="Add Guests" readOnly />
        <AiOutlineSearch
          className="search-icon"
          color="var(--clr-primary)"
          size="20px"
        />
      </SearchContainer>
      {isModalOpen && (
        <SearchModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </>
  );
};

export default SearchBlock;


