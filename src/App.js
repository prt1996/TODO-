import React, { useState } from "react";
import TodoList from "./TodoList/TodoList";

const App = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const changeHandler = (e) => {
    setTask(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const newTodos = [...todos, task];
    setTodos(newTodos);
    setTask("");
  };
  const deleteHandler = (indexValue) => {
    const newTodos = todos.filter((todos, index) => index !== indexValue);
    setTodos(newTodos);
  };
  return (
    <div>
      <center>
        <div className="card">
          <div className="card-body">
            <h5> ToDo management Applicaion </h5>
            <form onSubmit={submitHandler}>
              <input
                size={"30px"}
                type="text"
                name="task"
                value={task}
                onChange={changeHandler}
              />{" "}
              &nbsp;&nbsp;
              <input type="submit" name="Add" value="Add" />
            </form>
            <TodoList todos={todos} deleteHandler={deleteHandler} />
          </div>
        </div>
      </center>
    </div>
  );
};

export default App;
