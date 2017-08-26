import React, { Component } from 'react';
import './AddTask.css';

/* 
 * Add Task button.
 */
class AddTask extends Component {
    constructor(props) {
        super(props);
        this.onAddClick = this.onAddClick.bind(this);
    }
    onAddClick() {
        this.props.onTaskAdd();
    }
    render() {
        return (
            <div className="addTask">
                <button type="button" className="addTask__button" onClick={this.onAddClick}>Add task</button>
            </div>
        );
    }
}

export default AddTask;
