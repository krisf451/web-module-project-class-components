import React from "react";
import Todo from "./Todo";

function TodoList({ todos, toggleFinished, handleClear }) {
  const handleClick = () => {
    handleClear();
  };
  return (
    <div>
      <h2>TodoList Component</h2>
      {/* map through todos array and display a todo */}
      {todos.map(todo => (
        <Todo toggleFinished={toggleFinished} key={todo.id} todo={todo} />
      ))}
      <button onClick={handleClick}>Clear Finished</button>
    </div>
  );
}

export default TodoList;
