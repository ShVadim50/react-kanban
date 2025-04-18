
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TaskPage = () => {
  const { taskId } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("kanbanTasks"));
    if (savedTasks) {
      const allTasks = Object.values(savedTasks).flat();
      const found = allTasks.find((t) => t.id === taskId);
      setTask(found);
    }
  }, [taskId]);

  if (!task) {
    return <div>Task not found</div>;
  }

  return (
    <div className="task-page">
      <h1>{task.title}</h1>
      <p>{task.description || "This task has no description"}</p>
    </div>
  );
};

export default TaskPage;
