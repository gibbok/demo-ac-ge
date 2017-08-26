import React, { Component } from 'react';

/* 
 * Delete task button.
 */
class DeleteButton extends Component {
    constructor(props) {
        super(props);
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }
    onDeleteClick(event) {
        // lift state by calling onTaskDelete
        // which was passed in using props
        this.props.onTaskDelete(this.props.id);
    }
    render() {
        return (
            <i className="material-icons dp48" onClick={this.onDeleteClick}>close</i>
        );
    }
}

export default DeleteButton;

// <button onClick={this.onDeleteClick}>Delete</button>