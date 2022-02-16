import React, { Component } from 'react';
import './App.css';
import TaskList from './components/taskList'
import TaskInput from './components/taskInput'


class App extends Component {
  state = {
    tasks: [
      { value: 'Buy milk'},
      { value: 'Pay tithe'},
      { value: 'Get oil change'}
    ]
  }

  handleSubmit = (value) => {
    const newTask = { 'value': value}
    const tasks = [...this.state.tasks, newTask]
    this.setState({ tasks })
  }

  render() {
    return (
      <React.Fragment>
        <TaskInput 
          onSubmit={this.handleSubmit}
        />
        <TaskList 
          tasks={this.state.tasks}
        />
      </React.Fragment>
    )  
  }
}
export default App;
