// jsx 사용위해서는 import해줘야 함
import React from "react";
import ReactDOM from "react-dom";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
    this.state = {
      number: 0
    };
  }
  handleIncrease() {
    this.setState({
      number: this.state.number + 1
    });
  }

  handleDecrease() {
    this.setState({
      number: this.state.number - 1
    });
  }

  // 0 에서 1추가할때 왜 안 되는 이유 찾기
  render() {
    return (
      <div>
        <h1>카운터</h1>

        <div>값 : {this.state.number < 0 ? 0 : this.state.number}</div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
}
class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>제 todoList 목록들은 {this.props.todos} 입니다.</div>;
  }
}

class GroceryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false,
      hover: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  toggleHover() {
    this.setState({
      hover: !this.state.hover
    });
  }

  render() {
    const style = {
      textDecoration: this.state.done ? "line-through" : "none",
      fontWeight: this.state.hover ? "bold" : "normal",
      color: this.state.hover ? "#ed1212" : "#000"
    };
    return (
      // 자신이 받아온 props 값은 this. 키워드를 통하여 조회 할 수 있습니다.
      <div>
        <li
          style={style}
          onMouseEnter={this.toggleHover.bind(this)}
          onMouseLeave={this.toggleHover.bind(this)}
          onClick={this.onListItemClick.bind(this)}
        >
          {this.props.groceries}
        </li>
      </div>
    );
  }
}

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
  </div>,

  document.getElementById("root")
);
