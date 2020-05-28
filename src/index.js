// jsx 사용위해서는 import해줘야 함
import React from "react";
import ReactDOM from "react-dom";

// const TodoList = (props) => {
//   const onListItemClick = (event) => {
//     console.log('I got clicked');
//     alert('hi');
//   };
//
//   return (
//     <ul>
//       <li onClick={onListItemClick}>{props.todos[0]}</li>
//       <li onClick={onListItemClick}>{props.todos[1]}</li>
//       <li onClick={onListItemClick}>{props.todos[2]}</li>
//     </ul>
//   );
// };
//
// const App = () => (
//   <div>
//     <h2>My To Do List </h2>
//     <TodoList
//       todos={[
//         'Learn react',
//         'Crush Recast.ly',
//         'Maybe sleep',
//       ]}
//     />
//   </div>
// );

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
      <li
        style={style}
        onMouseEnter={this.toggleHover.bind(this)}
        onMouseLeave={this.toggleHover.bind(this)}
        onClick={this.onListItemClick.bind(this)}
      >
        {this.props.groceries}
        {this.props.todos}
      </li>
    );
  }
}

const GroceryApp = props => (
  <ul>
    {props.groceries.map(grocery => (
      <GroceryItem key={grocery.toString()} groceries={grocery} />
    ))}
    {props.todoList.map(todo => (
      <GroceryItem key={todo.toString()} todos={todo} />
    ))}
  </ul>
);

const groceries = ["cucumber", "kale"];
const lists = ["Learn react", "Crush Recast.ly", "Maybe sleep"];
ReactDOM.render(
  <GroceryApp groceries={groceries} todoList={lists} />,
  document.getElementById("root")
);
