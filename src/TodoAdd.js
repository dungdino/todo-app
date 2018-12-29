import React, { Component } from "react";
import "./TodoAdd.css";
class TodoAdd extends Component {
  render() {
    return (
      <div className="todo-add">
        <input type="text" placeholder="Nhập vào ghi chú!" />
      </div>
    );
  }
}

export default TodoAdd;
