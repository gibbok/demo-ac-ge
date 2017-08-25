import React, { Component } from 'react';
import DeleteButton from './DeleteButton.js'

class Task extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <div>
                    <input type="text" defaultValue={this.props.title} />
                </div>
                <div>
                    <DeleteButton />
                </div>
            </div>
        );
    }
}

export default Task;
