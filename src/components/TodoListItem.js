import React from "react";

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <div>제 todoList 목록들은 {this.props.todos} 입니다.</div>;
    // alert 로 목록들 누르면 number 번 눌렀습니다 뜨게 하기
  }
}
export default TodoListItem;
