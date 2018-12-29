import React, { Component } from "react";
import "./TodoList.css";
class TodoList extends Component {
  render() {
    return (
      <div className="note-list">
        <ul>
          <li>
            Đi xem phim <button className="btn-sua">Sửa</button> <button className="btn-xoa">Xoá</button>
          </li>
          <li>Làm bài tập</li>
          <li>Chat với người yêu</li>
        </ul>
      </div>
    );
  }
}

export default TodoList;
