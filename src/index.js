import React from "react";
import ReactDOM from "react-dom";

// const TodoList = props => {
//   const onListItemClick = event => {
//     console.log("I got clicked");
//   };
//   return (
//     <ul>
//       <li onClick={onListItemClick}>{props.todos[0]}</li>
//       <li>{props.todos[1]}</li>
//       <li>{props.todos[2]}</li>
//     </ul>
//   );
// };
// const App = () => (
//   <div>
//     <h2>My Todo List</h2>
//     <TodoList todos={["Learn React", "Crush Recast.ly", "Maybe sleep"]} />
//   </div>
// );

// class ToDoListItem은 React의 Component를 부모로 받습니다.
class TodoListItem extends React.Component {
  // constructor 메소드는 constructor에 props를 넘기는데,
  constructor(props) {
    super(props);
    // 아래와 같이 state를 만들고 안에 key value를 설정합니다.
    this.state = {
      done: false
    };
  }

  // constructor와 render 사이에 메소드를 다음과 같이 작성할 수 있습니다.
  onListItemClick() {
    // 기존의 state를 this.setState을 통해 바꿀 수 있습니다.
    this.setState({
      done: !this.state.done
    });
  }
  render() {
    // 삼항 연산자로 <li>의 스타일을 state에 상황에 따라 바꿉니다.
    const style = {
      textDecoration: this.state.done ? "line-through" : "none"
    };
    // inline style에 위 style을 넣고,
    // onClick event 메소드는 클릭시 위 onListItemClick() 메소드가 실행될 수 있도록 합니다.
    // this가 바인드 안되어있기 때문에 bind를 해줘야 실행이 됩니다.
    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>
        {/* this.props.todo 아님 조심 */}
        {this.props.todos3}
      </li>
    );
  }
}
// 아래 코드는 function이 Class를 감쌀 수 없습니다.
const TodoApp = props => (
  <ul>
    {/* props.todo3 === prop2 */}
    {props.todos3.map(todo => (
      <TodoListItem todos3={todo} />
    ))}
  </ul>
);
const todos2 = ["Learn React", "Crush Recast.ly", "Maybe sleep"];
ReactDOM.render(<TodoApp todos3={todos2} />, document.getElementById("root"));

/*
ReactDom.render -> todo2변수들을 TodoApp 으로 todo3 이라는 prop 으로 보냄 
결국에는 todo2 를 TodoApp 에서 -> TodoListItem 으로 prop 을 내려주는 셈 
 */
