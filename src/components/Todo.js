import React from "react";

class Todo extends React.Component {
  handleEdit= () => {
   this.props.editTask(this.props.index);
  }

  handleDelete = () => {
    this.props.deleteTask(this.props.index);
  }
  render() {
    return (
      <div className="d-flex">
        <div className="left">
          <p>{this.props.task}</p>
        </div>
        <div className="right">
          <button onClick={this.handleEdit}>Edit</button>
          <button onClick={this.handleDelete} style={{backgroundColor: "#e74c3c", marginLeft: '5px'}}>X</button>
        </div>
      </div>
    );
  }
}

export default Todo;
