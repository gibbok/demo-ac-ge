import React, { Component } from 'react';
import Task from './Task.js'

class TasksList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const data = this.props.data;
        const listItems = data.map(todo => {
            return <Task
                id={todo.id}
                key={todo.id.toString()}
                title={todo.title}
                onTitleChange={this.props.onTitleChange}
                onTaskDelete={this.props.onTaskDelete}
            />
        });
        return (
            <div>{listItems}</div>
        )
    }
}

export default TasksList;
