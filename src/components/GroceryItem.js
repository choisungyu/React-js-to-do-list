import React from "react";

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
export default GroceryItem;
