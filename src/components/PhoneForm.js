import React, { Component } from "react";

class PhoneForm extends Component {
  state = {
    name: "",
    phone: ""
  };
  handleChange = e => {
    this.setState({
      // name: e.target.value
      // Computed property names
      // e.target[name] , e.target[phone] : e.target.value
      // e.target.value 의 값에 따라서 name인지 phone 인지 구분된다음에
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    // 페이지 리로딩 방지
    e.preventDefault();
    // 상태값을 onCreate 를 통하여 부모에게 전달
    this.props.onCreate(this.state);
    // 상태 초기화
    this.setState({
      name: "",
      phone: ""
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="이름"
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
        />
        <input
          placeholder="전화번호"
          value={this.state.phone}
          onChange={this.handleChange}
          name="phone"
        />
        <div>{this.state.name} </div>
        <div>{this.state.phone} </div>
        <button type="submit">등록</button>
      </form>
    );
  }
}
/*
1. onChange 에 this.handleChange를 걸어준다.
2. handleChange는 target.value 를 setStat 해줌 value 값이 상태변화되고 
3. value 값인 this.state.name 을 div에 써줌
*/

export default PhoneForm;
