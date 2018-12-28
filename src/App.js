import React, { Component } from "react";
import "./App.css";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";
class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoAdd />
        <TodoList />
      </div>
    );
  }
}

export default App;
