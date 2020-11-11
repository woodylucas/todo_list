import React, { Component } from "react";

class AddTodo extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" name="title" placeholder="Add Todo.." />
          <input type="submit" value="Submit" className="btn" />
        </form>
      </div>
    );
  }
}

export default AddTodo;
