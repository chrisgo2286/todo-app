import React, { Component } from 'react';

class TaskInput extends Component {
  state = {
  	newTask: ''
  }	

  handleSubmit = (event) => {
  	event.preventDefault();
  	this.props.onSubmit(this.state.newTask)
  }

  handleChange = (event) => {
  	this.setState({ newTask: event.target.value })
  }

  render() {
  	return (
  	  <div>
  	    <h3>New Task</h3>
  	    <form onSubmit={this.handleSubmit}>
  	      <label>
  	        Task:
  	        <input 
  	          type='text'
  	          name='newTask'
  	          value={this.state.newTask}
  	          onChange={this.handleChange} />
  	      </label>
  	      <input type='submit' value='submit'/>
  	    </form>    
  	  </div>
  	)
  }
}

export default TaskInput;