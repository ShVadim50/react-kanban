
import React, { useState } from 'react';
import './App.css';
import KanbanBoard from './components/KanbanBoard';
import TaskDetails from './components/TaskDetails';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

function App() {
  const [tasks, setTasks] = useState({
    backlog: [
      { id: '1', title: 'Протестировать карточки', description: 'Описание задачи 1' },
      { id: '2', title: 'Добавить модалку', description: 'Описание задачи 2' }
    ],
    ready: [],
    inProgress: [],
    done: []
  });

  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="App">
      {/* Всегда отображаем доску */}
      <KanbanBoard tasks={tasks} setTasks={setTasks} />

      {/* Отдельно рендерим модалку, если URL содержит /task/... */}
      {location.pathname.startsWith('/task/') && (
        <div className="modal-overlay" onClick={() => navigate('/')}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <Routes>
              <Route path="/task/:column/:id" element={<TaskDetails tasks={tasks} />} />
            </Routes>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
