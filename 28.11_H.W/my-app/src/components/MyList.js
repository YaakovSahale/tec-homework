import { Component } from "react";
import * as styles from "./myList.module.css";

export default class MyList extends Component {
  state = { arrayList: [], showTasks: false };
  taskId = 0;
  tempArrayList = [];

  addTask = (e) => {
    this.setState({ showTasks: false });
    e.preventDefault();
    const form = e.target;

    const tempObj = {
      id: this.taskId++,
      title: form.input.value,
      isCompleted: false,
    };

    console.log(e.target.input.value);

    this.tempArrayList.push(tempObj);

    this.setState({
      arrayList: this.tempArrayList,
    });

    localStorage.setItem("city", "Noida");
    localStorage.setItem("city", "Noida");
    localStorage.setItem("city", "Noida");
    console.log(this.state.arrayList);
  };

  showUncompletedTasks = () => {
    this.setState({ showTasks: true });
  };

  deleteTask = (taskId) => {
    const deleteIndex = this.tempArrayList.findIndex((list) => {
      return list.Id === taskId;
    });

    this.tempArrayList.splice(deleteIndex, 1);
    this.setState({ todos: this.tempArrayList });
  };
  titleStyle;

  completeTask = (taskId) => {
    this.tempArrayList.find((list, i) => {
      return list.id === taskId
        ? (this.tempArrayList[i].isCompleted = true)
        : null;
    });
    this.titleStyle = "line-through";
  };

  render() {
    return (
      <div className={styles.container}>
        <h1>To-Do List</h1>
        <form onSubmit={this.addTask}>
          <input name="input" type="text" />
          <button>Add Task</button>
        </form>
        <button onClick={this.showUncompletedTasks}>Get tasks</button>
        {this.state.showTasks === false
          ? null
          : this.state.arrayList.map((list) => {
              return list.isCompleted === false ? (
                <div key={list.id}>
                  <h1 style={{ textDecoration: this.titleStyle }}>
                    {list.title}
                  </h1>
                  {list.isCompleted}
                  <button onClick={() => this.deleteTask(list.id)}>
                    delete
                  </button>
                  <button onClick={() => this.completeTask(list.id)}>
                    mark as done
                  </button>
                </div>
              ) : null;
            })}
      </div>
    );
  }
}

