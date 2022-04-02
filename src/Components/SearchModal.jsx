import React from "react";
import ReactDOM from "react-dom";
import {
  ModalWrapper,
  ModalSearchContainer,
  ModalSearchInputs,
} from "./Header.styles";

const SearchModal = ({ isModalOpen, setIsModalOpen }) => {
  return ReactDOM.createPortal(
    <ModalWrapper>
      <ModalSearchContainer>
        <div>
          <label>Location</label>
          <ModalSearchInputs />
        </div>
        <ModalSearchInputs />
      </ModalSearchContainer>
    </ModalWrapper>,
    document.getElementById("portal-root")
  );
};

export default SearchModal;
