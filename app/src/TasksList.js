import React, { Component } from 'react';
import Task from './Task.js'
import './TasksList.css';

/* 
 * Display a list of tasks.
 */
class TasksList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        // if no tasks, display a textual message
        // otherwise render a list of tasks
        const data = this.props.data;
        const listItems = data.length === 0 ? 'List is empty' : data.map(todo => {
            return <Task
                id={todo.id}
                key={todo.id.toString()}
                title={todo.title}
                onTitleChange={this.props.onTitleChange}
                onTaskDelete={this.props.onTaskDelete}
            />
        });
        return (
            <div className="tasksList">{listItems}</div>
        )
    }
}

export default TasksList;
