import React from "react";
import { Modal } from "react-responsive-modal";

const SearchModal = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <>
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Simple centered modal</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
          hendrerit risus, sed porttitor quam.
        </p>
      </Modal>
    </>
  );
};

export default SearchModal;


