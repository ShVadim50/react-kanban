
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const TaskDescription = () => {
  const { column, id } = useParams();
  const navigate = useNavigate();

  const tasks = JSON.parse(localStorage.getItem("kanbanTasks"));
  const task = tasks?.[column]?.[parseInt(id)];

  return (
    <div className="task-description">
      <button onClick={() => navigate(-1)}>← Back</button>
      <h2>Task Details</h2>
      <p><strong>Column:</strong> {column}</p>
      <p><strong>Task:</strong> {task}</p>
      <p><strong>Description:</strong> This is a description for the task.</p>
    </div>
  );
};

export default TaskDescription;
