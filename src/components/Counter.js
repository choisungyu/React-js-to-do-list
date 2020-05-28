import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
    this.state = {
      number: 0
    };
  }
  // 이렇게 수정할 수 있음
  handleIncrease = () => {
    const { number } = this.state;
    this.setState({
      number: number + 1
    });
  };

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
export default Counter;
