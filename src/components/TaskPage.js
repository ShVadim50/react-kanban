
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const TaskPage = () => {
  const { column, index } = useParams();
  const navigate = useNavigate();

  const tasks = JSON.parse(localStorage.getItem("kanbanTasks")) || {};
  const taskText = tasks[column]?.[index];

  return (
    <div style={{ padding: "2rem" }}>
      <button onClick={() => navigate("/")}>← Back</button>
      <h2>Task Detail</h2>
      {taskText ? (
        <p>{taskText}</p>
      ) : (
        <p>Task not found.</p>
      )}
    </div>
  );
};

export default TaskPage;
