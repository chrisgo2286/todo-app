import React, { Component } from 'react';

class TaskInput extends Component {

  handleSubmit = (event) => {
  	event.preventDefault();
  	this.props.onSubmit(event)
  }

  handleChange = (event) => {
    this.props.onChange(event)
  }

  render() {
  	return (
  	  <div>
  	    <form onSubmit={this.handleSubmit}>
  	      <label>
  	        Task:
  	        <input 
  	          type='text'
  	          name='task'
  	          value={this.props.fields.task}
  	          onChange={this.handleChange} />
  	      </label>
		  
		  <span style={{ color: 'red' }}>{ this.props.fieldErrors.name }</span>

		  <br />	
          
		  <label>
            Date:
            <input 
              type='date'
              name='date'
              value={this.props.fields.date}
              onChange={this.handleChange} />
          </label>
  	      <input type='submit' value='submit'/>
  	    </form>    
  	  </div>
  	)
  }
}

export default TaskInput;