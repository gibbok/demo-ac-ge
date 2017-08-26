import React, { Component } from 'react';
import AddButton from './AddButton.js';
import TasksList from './TasksList.js';
import logo from './logo.svg';
import './App.css';

let createRandomId = () => Math.random().toString(36).substr(2, 10);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: createRandomId(),
          title: 'Buy milk',
          isDone: false
        },
        {
          id: createRandomId(),
          title: 'Buy bread',
          isDone: false
        },
        {
          id: createRandomId(),
          title: 'Buy yogurt',
          isDone: false
        }
      ]
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onTaskDelete = this.onTaskDelete.bind(this);
    this.onTaskAdd = this.onTaskAdd.bind(this);
  }
  onTitleChange(id, title) {
    let data = [...this.state.data];
    const index = data.findIndex(item => item.id === id);
    data[index].title = title;
    this.setState({ data: data });
  }
  onTaskDelete(id) {
    let data = [...this.state.data]
    const index = data.findIndex(item => item.id === id);
    data.splice(index, 1);
    this.setState({ data: data });
  }
  onTaskAdd() {
    let data = [...this.state.data];
    data.push({
      id: createRandomId(),
      title: '',
      isDone: false
    });
    this.setState({ data: data });
  }
  render() {
    return (
      <div className="app">
        <div className="app__header">
          <img src={logo} className="app__logo" alt="logo" />
          <h2>React Task List</h2>
        </div>
        <TasksList
          data={this.state.data}
          onTitleChange={this.onTitleChange}
          onTaskDelete={this.onTaskDelete}
        />
        <AddButton
          onTaskAdd={this.onTaskAdd}
        />
      </div>
    );
  }
}

export default App;
