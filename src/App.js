import React, { Component } from "react";

class App extends Component {
  state = {
    input: "",
    todolist: []
  };

  handleChange = event => {
    this.setState({ input: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <h1>hi</h1>
        <form action="">
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
