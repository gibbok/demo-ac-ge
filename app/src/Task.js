import React, { Component } from 'react';
import DeleteButton from './DeleteButton.js'

class Task extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div id={this.props.id}>
                {this.props.title}
                <DeleteButton />
            </div>
        );
    }
}

export default Task;