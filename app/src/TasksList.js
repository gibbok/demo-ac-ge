import React, { Component } from 'react';
import Task from './Task.js'

class TasksList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const data = this.props.data;
        const listItems = data.map(todo => {
            return <div key={todo.id.toString()}>{todo.title}</div>
        })
        return (
            <div>{listItems}</div>
        )
    }
}

export default TasksList;