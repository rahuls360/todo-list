import React from "react";

class Todo extends React.Component {
  render() {
    return (
      <div className="d-flex">
        <div className="left">
          <p>{this.props.task}</p>
        </div>
        <div className="right">
          <button>Edit</button>
          <button>X</button>
        </div>
      </div>
    );
  }
}

export default Todo;
