import React, { Component } from "react";

export default class TodoList extends Component {
  state = { toDoList: [] };
  tempList = [];

  addTask = (e) => {
    e.preventDefault();
    this.tempList.push(e.target.input.value);
    this.setState({ toDoList: this.tempList });
  };

  displayTasks = ()=>{
    
  }

  render() {
    return (
      <div>
        <h1>My to-do list</h1>
        <form onSubmit={this.addTask}>
          <input name="input" onChange={this.getTask} type="text" />
          <button>add task</button>
        </form>
        <button onClick={}>display tasks</button>
      </div>
    );
  }
}
