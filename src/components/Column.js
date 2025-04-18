
import React, { useState } from "react";

const Column = ({ title, tasks, column, addTask, sourceTasks = [], setTasks, onTaskClick }) => {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const [selectedSourceTask, setSelectedSourceTask] = useState("");

  const handleAddClick = () => {
    setIsAdding(true);
  };

  const handleSubmit = () => {
    if (newTaskTitle.trim()) {
      addTask(newTaskTitle, column);
      setNewTaskTitle("");
      setIsAdding(false);
    }
  };

  const handleSelect = () => {
    if (selectedSourceTask) {
      const selectedTaskObj = sourceTasks.find(task => task.title === selectedSourceTask);
      if (selectedTaskObj) {
        setTasks(prev => ({
          ...prev,
          [column]: [...prev[column], selectedTaskObj],
          [Object.keys(prev).find(key => prev[key].includes(selectedTaskObj))]:
            prev[Object.keys(prev).find(key => prev[key].includes(selectedTaskObj))]
              .filter(task => task.title !== selectedTaskObj.title)
        }));
        setSelectedSourceTask("");
      }
    }
  };

  return (
    <div className="kanban__column">
      <h2>{title}</h2>
      <ul className="kanban__tasks">
        {tasks.map((task, index) => (
          <li key={index} className="task-item" onClick={() => onTaskClick && onTaskClick(task)}>
            {task.title}
          </li>
        ))}
      </ul>

      {column === "backlog" ? (
        isAdding ? (
          <>
            <input
              type="text"
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
              placeholder="Введите название задачи"
            />
            <button onClick={handleSubmit}>Submit</button>
          </>
        ) : (
          <button onClick={handleAddClick}>+ Add card</button>
        )
      ) : (
        <>
          <select value={selectedSourceTask} onChange={(e) => setSelectedSourceTask(e.target.value)}>
            <option value="">Select task</option>
            {sourceTasks.map((task, index) => (
              <option key={index} value={task.title}>{task.title}</option>
            ))}
          </select>
          <button onClick={handleSelect} disabled={!selectedSourceTask}>+ Add card</button>
        </>
      )}
    </div>
  );
};

export default Column;
