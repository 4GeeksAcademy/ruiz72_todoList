import React from 'react';

const ToDoList = ({ tasks, onDelete }) => {
  return (
    <ul>
      {tasks.length === 0 ? (
        <li>No hay tareas, añadir tareas</li>
      ) : (
        tasks.map((task, index) => (
          <li key={index}>
            {task}
            <span
              className="delete-icon"
              onClick={() => onDelete(index)}
            >
              &#x2716;
            </span>
          </li>
        ))
      )}
    </ul>
  );
};

export default ToDoList;