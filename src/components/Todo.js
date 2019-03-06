import React from "react";

class Todo extends React.Component {
  render() {
    return <p className="text-center">{this.props.task}</p>;
  }
}

export default Todo;
