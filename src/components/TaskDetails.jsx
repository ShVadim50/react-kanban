
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const TaskDetails = ({ tasks }) => {
  const { column, id } = useParams(); // Получаем параметры из URL
  const navigate = useNavigate();
  const task = tasks[column]?.find((t) => t.id === id); // Ищем задачу по колонке и id

  if (!task) return <p>Задача не найдена</p>; // Если задача не найдена

  return (
    <div>
      <button onClick={() => navigate("/")}>Назад</button>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
    </div>
  );
};

export default TaskDetails;

