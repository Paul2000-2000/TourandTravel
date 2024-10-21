import { React } from "react";
import Modal from "react-modal";
import "./Modal.css";
import { IoMdClose } from "react-icons/io";

const ModalEx = ({ isOpen, onClose }) => {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Terms of Service"
        ariaHideApp={false}
        className="modal"
        overlayClassName="Overlay"
      >
        <div className="modal-header">
          <p className="modal-header-title">Book Your Trip</p>
          <IoMdClose onClick={onClose} className="modal-header-close" />
        </div>

        <div className="modal-content">
          <input type="text" className="modal-content-input" />
          <input type="text" className="modal-content-input" />
          <input type="text" className="modal-content-input" />
        </div>
        <button onClick={onClose} className="modal-button">
          Book Now
        </button>
      </Modal>
    </div>
  );
};

export default ModalEx;
