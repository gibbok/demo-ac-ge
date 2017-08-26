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
            <i className="material-icons dp48" onClick={this.onDeleteClick}>close</i>
           
        );
    }
}

export default DeleteButton;
// <button onClick={this.onDeleteClick}>Delete</button>