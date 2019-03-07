import React, { Component } from "react";
import Todo from "./components/Todo";

import "bootstrap/dist/css/bootstrap.css";

if (typeof window !== "undefined") {
  window.jQuery = window.$ = require("jquery");
  require("bootstrap");
}

class App extends Component {
  state = {
    input: "",
    todolist: []
  };

  handleChange = event => {
    this.setState({ input: event.target.value });
  };

  handleSubmit = event => {
    if (this.state.input !== "") {
      const todolist = this.state.todolist;
      todolist.push(this.state.input);
      this.setState({ todolist: todolist });
    } else {
      console.log("Please enter an item");
    }
    this.setState({ input: "" });
    event.preventDefault();
  };

  editTask = (key, task) => {
    const todolist = this.state.todolist;
    todolist[key] = task;
    this.setState({todolist: todolist});
  }

  deleteTask = (key) => {
    console.log("Delete", key);
    const todolist = this.state.todolist;
    todolist.splice(key, 1)
    this.setState({todolist: todolist});
  }

  render() {
    return (
      <section id="todo" className="mt-5">
        <div className="container">
          <h3 className="text-center">Todo List App</h3>
          <div className="row">
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                value={this.state.input}
                onChange={this.handleChange}
                className="form-control"
              />
            </form>
            {this.state.todolist.map((task,index) => {
              return <Todo task={task} key={index} index={index} editTask={this.editTask} deleteTask={this.deleteTask}/>;
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default App;
