import React from "react";
import ReactDOM from "react-dom";
import {
  ModalOverlay,
  ModalWrapper,
  InputWrapper,
  ModalInput,
  ButtonContainer,
  ModalContentWrapper
} from "./Header.styles";
import { GrClose } from "react-icons/gr";
import { AiOutlineSearch } from "react-icons/ai";

const SearchModal = ({ isModalOpen, setIsModalOpen }) => {
  return ReactDOM.createPortal(
    <ModalOverlay>
      <ModalWrapper>
        <p>
          <b>Edit your search</b>
        </p>
        <GrClose
          className="close-icon"
          size="16px"
          onClick={() => setIsModalOpen(false)}
        />
        <ModalContentWrapper>
          <InputWrapper>
            <label>Location</label>
            <ModalInput />
          </InputWrapper>
          <InputWrapper>
            <label>Guests</label>
            <ModalInput />
          </InputWrapper>
          <ButtonContainer>
            <AiOutlineSearch size="16px" />
            <p>Search</p>
          </ButtonContainer>
        </ModalContentWrapper>
      </ModalWrapper>
    </ModalOverlay>,
    document.getElementById("portal-root")
  );
};

export default SearchModal;
