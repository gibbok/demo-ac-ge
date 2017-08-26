import React, { Component } from 'react';
import Header from './Header.js';
import AddTask from './AddTask.js';
import TasksList from './TasksList.js';
import './App.css';

// create an id using a random alphanumeric value
let createRandomId = () => Math.random().toString(36).substr(2, 10);

/* 
 * Main component.
 * Notes:
 * The main state is kept here and passed down to other components using props.
 */
class App extends Component {
  constructor(props) {
    super(props);
    // app state
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
    // bind component scope for handlers
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onTaskDelete = this.onTaskDelete.bind(this);
    this.onTaskAdd = this.onTaskAdd.bind(this);
  }
  onTitleChange(id, title) {
    // update title in state
    let data = [...this.state.data];
    const index = data.findIndex(item => item.id === id);
    data[index].title = title;
    this.setState({ data: data });
  }
  onTaskDelete(id) {
    // delete task from state 
    let data = [...this.state.data]
    const index = data.findIndex(item => item.id === id);
    data.splice(index, 1);
    this.setState({ data: data });
  }
  onTaskAdd() {
    // add task to state
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
        <Header />
        <TasksList
          data={this.state.data}
          onTitleChange={this.onTitleChange}
          onTaskDelete={this.onTaskDelete}
        />
        <AddTask
          onTaskAdd={this.onTaskAdd}
        />
      </div>
    );
  }
}

export default App;
