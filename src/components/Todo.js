import React from "react";

class Todo extends React.Component {
  render() {
    return <h1>{this.props.task}</h1>;
  }
}

export default Todo;
