import React, { Component } from "react";
import Todos from "./Components/Todos";
import Header from "./Components/layout/Header";
import AddTodo from "./Components/AddTodo";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          title: "Take out the trash",
          completed: false,
        },
        {
          id: 2,
          title: "Dinner with wife",
          completed: false,
        },
        {
          id: 3,
          title: "Meeting with boss",
          completed: false,
        },
      ],
    };
    this.markComplete = this.markComplete.bind(this);
    this.delTodo = this.delTodo.bind(this);
  }
  // Toggle complete
  markComplete(id) {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  }

  // Delete todo
  delTodo(id) {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  }
  render() {
    // console.log above the return to debug.
    console.log("state:", this.state.todos);
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo />
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
        </div>
      </div>
    );
  }
}

export default App;
