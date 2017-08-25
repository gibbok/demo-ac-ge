import React, { Component } from 'react';
import logo from './logo.svg';

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
