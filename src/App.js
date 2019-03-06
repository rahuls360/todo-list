import React, { Component } from "react";

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

  render() {
    return (
      <div className="App">
        <h1>hi</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.input}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default App;
