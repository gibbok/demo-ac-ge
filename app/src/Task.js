import React, { Component } from 'react';
import DeleteButton from './DeleteButton.js'

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
    render() {
        return (
            <div>
                <div>
                    <input type="text"
                        defaultValue={this.props.title}
                        onChange={this.onTitleChange} />
                </div>
                <div>
                    <DeleteButton />
                </div>
            </div>
        );
    }
}

export default Task;

// onChange={(e) => this.onTitleChange(e.target.value)}
