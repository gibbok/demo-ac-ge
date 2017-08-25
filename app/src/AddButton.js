import React, { Component } from 'react';

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
            <button type="button" onClick={this.onAddClick}>Add a task</button>
        );
    }
}

export default AddButton;
