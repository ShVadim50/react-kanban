
import React, { useState, useEffect } from "react";
import Column from "./Column";
import UserMenu from "./UserMenu";

const KanbanBoard = () => {
  // Загружаем задачи из localStorage при инициализации
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("kanbanTasks");
    return saved
      ? JSON.parse(saved)
      : {
          backlog: ["Task 1", "Task 2"],
          ready: [],
          inProgress: [],
          done: []
        };
  });

  // Сохраняем задачи в localStorage при каждом изменении
  useEffect(() => {
    localStorage.setItem("kanbanTasks", JSON.stringify(tasks));
  }, [tasks]);

  // Добавление задачи в указанную колонку
  const addTask = (text, column) => {
    if (text) {
      setTasks((prev) => ({
        ...prev,
        [column]: [...prev[column], text]
      }));
    }
  };

  //  Очистить все задачи и localStorage
  const clearBoard = () => {
    const emptyTasks = {
      backlog: [],
      ready: [],
      inProgress: [],
      done: []
    };
    setTasks(emptyTasks);
    localStorage.setItem("kanbanTasks", JSON.stringify(emptyTasks));
  };

  return (
    <div className="kanban">
      <header className="kanban__header">
        <h1>Awesome Kanban Board</h1>
        <UserMenu />
      </header>

      {/* Кнопка Очистки */}
      <div style={{ textAlign: "right", margin: "10px 20px" }}>
        <button onClick={clearBoard} className="clear-button">Очистить доску</button>
      </div>

      <main className="kanban__columns">
        <Column title="Backlog" tasks={tasks.backlog} column="backlog" addTask={addTask} />
        <Column title="Ready" tasks={tasks.ready} column="ready" addTask={addTask} sourceTasks={tasks.backlog} setTasks={setTasks} />
        <Column title="In Progress" tasks={tasks.inProgress} column="inProgress" addTask={addTask} sourceTasks={tasks.ready} setTasks={setTasks} />
        <Column title="Done" tasks={tasks.done} column="done" addTask={addTask} sourceTasks={tasks.inProgress} setTasks={setTasks} />
      </main>

      <footer className="kanban__footer">
        <p>Active tasks: {tasks.inProgress.length}</p>
        <p>Finished tasks: {tasks.done.length}</p>
        <p>Kanban board by You</p>
      </footer>
    </div>
  );
};

export default KanbanBoard;
