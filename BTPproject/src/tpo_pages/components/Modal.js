import React from "react";
import "./Modal.css";

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Credentials</h1>
        </div>
        <div className="body">
          <p>USER ID: SAKJCN</p>
          
          <p>Password: hjbib</p>
        </div>
        <button className="btn"> Share via MAIL</button>
        
      </div>
    </div>
  );
}

export default Modal;