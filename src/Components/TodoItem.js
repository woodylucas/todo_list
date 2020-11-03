import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
	constructor(props) {
		super(props);
		this.markComplete = this.markComplete.bind(this);
	}
	getStyle = () => {
		return {
			background: '#f4f4f4',
			padding: '10px',
			borderBottom: '1px #ccc dotted',
			textDecoration: this.props.todo.completed ? 'line-through' : 'none'
		};
	};

	markComplete(e) {
		console.log(this.props);
	}
	render() {
		// Destructuring
		const {id, title} = this.props.todo;
		// bubbling up w/ markComplete
		return (
			<div style={this.getStyle()}>
				<p>
					<input
						type="checkbox"
						onChange={this.props.markComplete.bind(this, id)}
					/>{' '}
					{title}
					<button style={btnStyle}>x</button>
				</p>
			</div>
		);
	}
}

const btnStyle = {
	background: '#ff0000',
	color: '#fff',
	border: 'none',
	padding: '6px 8px',
	borderRadius: '50%',
	cursor: 'pointer',
	float: 'right'
};

export default TodoItem;
