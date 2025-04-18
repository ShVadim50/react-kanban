
import React from "react";

const TaskModal = ({ task, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{task.title}</h2>
        <p>{task.description}</p>
        <button onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
};

export default TaskModal;
