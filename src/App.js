import React, {Component} from 'react';
import Todos from './Components/Todos';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [
				{
					id: 1,
					title: 'Take out the trash',
					completed: false
				},
				{
					id: 2,
					title: 'Dinner with wife',
					completed: false
				},
				{
					id: 3,
					title: 'Meeting with boss',
					completed: false
				}
			]
		};
		this.markComplete = this.markComplete.bind(this);
	}
	// Toggle complete
	markComplete(id) {
		this.setState({
			todos: this.state.todos.map(todo => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			})
		});
	}
	render() {
		// console.log above the return to debug.
		console.log('state:', this.state.todos);
		return (
			<div className="App">
				<Todos todos={this.state.todos} markComplete={this.markComplete} />
			</div>
		);
	}
}

export default App;
