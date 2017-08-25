import React, { Component } from 'react';

class AddButton extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <button type="button">Add a task</button>
        );
    }
}

export default AddButton;
