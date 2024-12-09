import React from "react";
import { IoIosCall } from "react-icons/io";
import "./ModalCallU.css";

function ModalCallUs({ isModalOpen, onClose }) {
  if (!isModalOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-call" onClick={(e) => e.stopPropagation()}>

      <div className="modal-buttons">
        <a href="tel:+217 800 1094" className="modal-call-btn">
          <IoIosCall/> Call +217 800 1094
        </a>
        <button className="modal-cancel-btn" onClick={onClose}>
          Cancel
        </button>
      </div>
      </div>
    </div>
  );
}

export default ModalCallUs;
