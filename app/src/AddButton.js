import React, { Component } from 'react';
import './AddButton.css';

class AddButton extends Component {
    constructor(props) {
        super(props);
        this.onAddClick = this.onAddClick.bind(this);
    }
    onAddClick() {
        this.props.onTaskAdd()
    }
    render() {
        return (
            <div className="addButton">
                <button type="button" onClick={this.onAddClick}>Add a task</button>
            </div>
        );
    }
}

export default AddButton;
