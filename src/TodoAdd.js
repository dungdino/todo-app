import React, { Component } from "react";

class TodoAdd extends Component {
  render() {
    return (
      <div>
        <input
          className="content-note"
          placeholder="Nhập vào nội dung ghi chú!"
        />
      </div>
    );
  }
}

export default TodoAdd;
