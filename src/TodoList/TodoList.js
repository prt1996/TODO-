import React from "react";

const TodoList = ({ todos, deleteHandler }) => {
  return (
    <div>
      {todos.map((todos, Index) => (
        <div key={Index}>
          <h5>
            {todos} &nbsp;
            <button onClick={() => deleteHandler(Index)}>Delete</button>
          </h5>
        </div>
      ))}
    </div>
  );
};
export default TodoList;
