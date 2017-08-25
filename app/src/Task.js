import React, { Component } from 'react';
import DeleteButton from './DeleteButton.js'

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        this.setState({title: event.value});
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <div>
                    <input type="text"
                        defaultValue={this.props.title}
                        onChange={this.handleInputChange} />
                </div>
                <div>
                    <DeleteButton />
                </div>
            </div>
        );
    }
}

export default Task;
