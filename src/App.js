import React, { Component } from 'react';
import './App.css';
import TaskList from './components/taskList'
import TaskInput from './components/taskInput'

class App extends Component {
  state = {

    lastid: 4,
    
    fields: {
      task:'',
      date:'',
    },

    fieldErrors: {},

    tasks: [
      { id: 2, task: 'Buy milk', date: '2022-02-01', completed: 'off'},
      { id: 3, task: 'Pay tithe', date: '2022-02-04', completed: 'off'},
      { id: 4, task: 'Get oil change', date: '2022-02-09', completed: 'off'},
    ]
  }

  handleChange = (event) => {
    const fields = this.state.fields;
    fields[event.target.name] = event.target.value;
    this.setState({ fields })
  }

  handleSubmit = (event) => {
    const fields = this.state.fields;
    const fieldErrors = this.validate(fields)
    this.setState({ fieldErrors });
    event.preventDefault();

    if (Object.keys(fieldErrors).length) return;

    fields['completed'] = 'off';
    fields['id'] = this.state.lastid + 1;
    const lastid = this.state.lastid + 1;
    this.setState({ lastid })
    const tasks = [...this.state.tasks, fields]
    this.setState({
      tasks,
      fields: {
        task: '',
        date: '',
      }  
    })
  }

  validate = (fields) => {
	  const errors = {};
	  if (!fields.task) errors.name = 'Task Required';
    return errors;
  }

  handleTaskListChange = (event) => {
    const tasks = [...this.state.tasks];
    const category = event.target.name;
    for(var i=0; i < this.state.tasks.length; i++) {
      if(tasks[i].id == event.target.id) {
        if(event.target.name === 'completed') {
          tasks[i].completed = tasks[i].completed === 'on' ? 'off' : 'on';
        }
        else {
          tasks[i][event.target.name] = event.target.value;
        }
    this.setState({ tasks })
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <TaskInput
          fields={this.state.fields}
          fieldErrors={this.state.fieldErrors}
          onChange={this.handleChange} 
          onSubmit={this.handleSubmit}
        />
        <TaskList 
          tasks={this.state.tasks}
          onChange={this.handleTaskListChange}
        />
      </React.Fragment>
    ) 
  }
}
export default App;
