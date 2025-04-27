import React from "react";

const TodoItem = ({ todo, onAction, actionLabel }) => {
  return (
    <div className="todo-item">
      <p>{todo.title}</p>
      {todo.completed}
      <button
        className={`btn ${actionLabel === "Complete" ? "complete" : actionLabel === "Start" ? "start" : "undo"}`}
        onClick={() => onAction(todo.id)}
      >
        {actionLabel}
      </button>
    </div>
  );
};

export default TodoItem;
