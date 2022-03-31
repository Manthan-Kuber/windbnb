import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import SearchModal from "./SearchModal";

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
      <SearchModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};

export default SearchBlock;

const SearchContainer = styled.div`
  box-shadow: 0px 1px 6px 0px #0000001a;
  border-radius: 16px;
  padding-block: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  place-items: center;
  margin-block: 4rem;
  width: min(100%, 35rem);
  margin-inline: auto;
  cursor: pointer;

  @media (min-width: 40em) {
    margin-block: revert;
    margin-inline: revert;
  }

  .search-icon {
    margin-inline-start: 1.5rem;
    margin-inline-end: 2.3rem;
  }
`;

const SearchInputs = styled.input`
  border: none;
  font: 400 1.4rem "Mulish", sans-serif;
  padding-block: 1rem;
  text-align: center;
  cursor: pointer;
  width: 100%;
  &:nth-child(2) {
    border-right: 1px solid #f2f2f2;
    border-left: 1px solid #f2f2f2;
  }

  &:focus {
    outline: none;
  }
`;
