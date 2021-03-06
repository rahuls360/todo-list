import React from "react";

class Todo extends React.Component {
  state = {
    editFlag: false,
    task: this.props.task
  };

  handleEdit = () => {
    this.setState({ editFlag: !this.state.editFlag });
  };

  handleDelete = () => {
    this.props.deleteTask(this.props.index);
  };

  handleEditChange = event => {
    this.setState({ task: event.target.value });
  };

  handleSubmit = event => {
    this.props.editTask(this.props.index, this.state.task);
    this.setState({ editFlag: false });
    event.preventDefault();
  };

  handleClick = event => {
    this.props.toggleTaskStatus(this.props.index);
  };

  render() {
    let edit = <p>{this.state.task}</p>;
    if (this.state.editFlag) {
      edit = (
        <form onSubmit={this.handleSubmit} className="form-edit">
          <input
            type="text"
            value={this.state.task}
            onChange={this.handleEditChange}
            autoFocus
          />
        </form>
      );
    }
    return (
      <div className="d-flex">
        <div
          className={this.props.status ? "left done" : "left"}
          onClick={this.handleClick}
        >
          {edit}
        </div>
        <div className="right">
          <button onClick={this.handleEdit}>Edit</button>
          <button
            onClick={this.handleDelete}
            style={{ backgroundColor: "#e74c3c", marginLeft: "5px" }}
          >
            X
          </button>
        </div>
      </div>
    );
  }
}

export default Todo;
