import React from "react";
import Box from "@mui/material/Box";
import { TfiClose } from "react-icons/tfi";
import Modal from "@mui/material/Modal";
import InputMask from 'react-input-mask';
import "./ModalCallU.css";

function ModalCallUs({ isModalOpen, onClose }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    bgcolor: "background.paper",
    border: "none",
    p: 4,
  };

  return (
    <div>
      <Modal
        open={isModalOpen}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1>Order a call</h1>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <input type="text" placeholder="Your name" />
            <InputMask 
            mask="+1(999)999-9999" 
            placeholder="+1 (___) ___-____" alwaysShowMask={true}>
  {(inputProps) => <input {...inputProps} type="text" />}
            </InputMask>
            <button className="buttonForm">Send</button>
          </form>
          <button className="buttonClose" onClick={onClose}>
            <TfiClose />
          </button>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalCallUs;
