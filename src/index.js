// jsx 사용위해서는 import해줘야 함
import React from "react";
import ReactDOM from "react-dom";
import PhoneForm from "./components/PhoneForm";
import Counter from "./components/Counter";
import TodoListItem from "./components/TodoListItem";
import GroceryItem from "./components/GroceryItem";
import App from "./components/App";
// import App from "./components/App";

const GroceryApp = props => (
  <ul>
    {props.groceries.map(grocery => (
      <GroceryItem key={grocery.toString()} groceries={grocery} />
    ))}
  </ul>
);

const TodoApp = props => (
  <ul>
    {props.todoList.map(todo => (
      <TodoListItem key={todo.toString()} todos={todo} />
    ))}
  </ul>
);

const groceries = ["cucumber", "kale"];
const lists = ["Learn react", "Crush Recast.ly", "Maybe sleep"];

ReactDOM.render(
  <div>
    <Counter />
    ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
    <GroceryApp groceries={groceries} />
    ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
    <TodoApp todoList={lists} />
    ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
    <PhoneForm />
    ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
    <App />
  </div>,

  document.getElementById("root")
);
