import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {

    getStyle = () => {
        return {
            background: '#f4f4f4',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            padding: '10px',
            borderBottom: '1px #ccc dotted'
        }
    }

    render() {
        const { id ,title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, this.id)}/> {' '}
                {title}
                </p>
            </div>
        )
    }
}

// PropTypes
TodoItem.propotype = {
    todos: PropTypes.object.isRequired
}

export default TodoItem
