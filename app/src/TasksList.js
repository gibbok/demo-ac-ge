import React, { Component } from 'react';
import Task from './Task.js'

class TasksList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const data = this.props.data;
        const listItems = data.map(todo => {
            return <Task key={todo.id.toString()} title={todo.title} />
        })
        return (
            <div>{listItems}</div>
        )
    }
}

export default TasksList;
