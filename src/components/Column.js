

import React, { useState } from "react";
import Card from "./Card";

const Column = ({ title, tasks, column, addTask, sourceTasks = [], setTasks }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [input, setInput] = useState("");
  const [selectedTask, setSelectedTask] = useState("");

  const handleInputSubmit = () => {
    if (input.trim()) {
      addTask(input, column);
      setInput("");
      setIsAdding(false);
    }
  };

  const handleSelectSubmit = () => {
    if (selectedTask) {
      setTasks((prev) => {
        const updated = { ...prev };
        updated[column] = [...updated[column], selectedTask];
        updated[getPreviousColumn(column)] = updated[getPreviousColumn(column)].filter((task) => task !== selectedTask);
        return updated;
      });
      setSelectedTask("");
      setIsAdding(false);
    }
  };

  const getPreviousColumn = (col) => {
    const order = ["backlog", "ready", "inProgress", "done"];
    const index = order.indexOf(col);
    return order[index - 1];
  };

  return (
    <section className="kanban__column">
      <h2>{title}</h2>

     {tasks.map((text, index) => (
  <Card key={index} id={index} text={text} column={column} />
))}



      {isAdding ? (
        column === "backlog" ? (
          <div>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter task"
            />
            <button onClick={handleInputSubmit}>Submit</button>
          </div>
        ) : (
          <div>
            <select value={selectedTask} onChange={(e) => setSelectedTask(e.target.value)}>
              <option value="">Select task</option>
              {sourceTasks.map((task, index) => (
                <option key={index} value={task}>
                  {task}
                </option>
              ))}
            </select>
            <button onClick={handleSelectSubmit}>Submit</button>
          </div>
        )
      ) : (
        <button
          onClick={() => setIsAdding(true)}
          disabled={column !== "backlog" && sourceTasks.length === 0}
        >
          + Add card
        </button>
      )}
    </section>
  );
};

export default Column;
