import React from "react";

export default function Todo({ todo, toggleFinished }) {
  const handleClick = () => {
    toggleFinished(todo.id);
  };
  return (
    <div>
      {
        <p
          onClick={handleClick}
          className={`todo${todo.finished ? " finished" : ""}`}
        >
          {todo.name}
        </p>
      }
    </div>
  );
}
