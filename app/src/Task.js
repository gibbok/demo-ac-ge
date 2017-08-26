import React, { Component } from 'react';
import DeleteButton from './DeleteButton.js'
import './Task.css';

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title
        };
        this.onTitleChange = this.onTitleChange.bind(this);
    }
    onTitleChange(event) {
        // lifting up state
        this.props.onTitleChange(this.props.id, event.target.value);
        event.preventDefault();
    }
    componentDidMount() {
        // focus input after rendering
        this.titleInput.focus();
    }
    render() {
        return (
            <div className="task">
                <div className="task__input" >
                    <input type="text"
                        defaultValue={this.props.title}
                        ref={(input) => { this.titleInput = input; }}
                        onChange={this.onTitleChange}
                    // onChange={(e) => this.onTitleChange(e.target.value)}
                    />
                </div>
                <div className="task__delete" >
                    <DeleteButton
                        id={this.props.id}
                        onTaskDelete={this.props.onTaskDelete}
                    />
                </div>
            </div>
        );
    }
}

export default Task;


