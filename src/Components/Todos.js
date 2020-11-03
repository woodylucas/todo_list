import React, {Component} from 'react';
import TodosItem from './TodoItem';

class Todos extends Component {
	render() {
		console.log('props', this.props.todos);
		return this.props.todos.map(todo => <TodosItem todo={todo} />);
	}
}

export default Todos;
