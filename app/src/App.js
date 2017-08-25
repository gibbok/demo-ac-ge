import React, { Component } from 'react';
import AddButton from './AddButton.js';
import TasksList from './TasksList.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 0,
          title: 'Buy milk',
          status: 0, // 0 = todo, 1 = done
        },
        {
          id: 1,
          title: 'Buy bread',
          status: 0,
        },
        {
          id: 2,
          title: 'Buy yogurt',
          status: 0,
        }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <TasksList data={this.state.data} />
        <AddButton />
      </div>
    );
  }
}

export default App;
