import React, { Component } from "react";
import ReactDOM from "react-dom";

const TodoList = props => {
  const onListItemClick = event => {
    console.log("I got clicked");
  };
  return (
    <ul>
      <li onClick={onListItemClick}>{props.todos[0]}</li>
      <li>{props.todos[1]}</li>
      <li>{props.todos[2]}</li>
    </ul>
  );
};
const App = () => (
  <div>
    <h2>My Todo List</h2>
    <TodoList todos={["Learn React", "Crush Recast.ly", "Maybe sleep"]} />
  </div>
);
ReactDOM.render(
  <App />,

  document.getElementById("root")
);
