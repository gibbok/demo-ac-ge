import React, { Component } from 'react';

class DeleteButton extends Component {
    constructor(props) {
        super(props);
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }
    onDeleteClick(event) {
        this.props.onTaskDelete(this.props.id);
    }
    render() {
        return (
            <button onClick={this.onDeleteClick}>Delete</button>
        );
    }
}

export default DeleteButton;
