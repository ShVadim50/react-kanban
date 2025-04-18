

import React from "react";
import "./Modal.css";

const Modal = ({ task, onClose }) => {
  if (!task) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h2>{task.title}</h2>
        <p>{task.description}</p>
      </div>
    </div>
  );
};

export default Modal;
