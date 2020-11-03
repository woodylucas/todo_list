import React, {Component} from 'react';
import TodosItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
	render() {
		console.log('props', this.props.todos);
		return this.props.todos.map(todo => (
			<TodosItem
				key={todo.id}
				todo={todo}
				markComplete={this.props.markComplete}
			/>
		));
	}
	// Proptypes
}

Todos.propTypes = {
	todos: PropTypes.array.isRequired
};
export default Todos;
