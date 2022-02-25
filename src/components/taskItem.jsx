import React, { Component } from 'react';

class TaskItem extends Component {

  handleChange = (event) => {
    this.props.onChange(event);
  }

  handleClassNames = () => {
    return this.props.task.completed === 'on' ? 'task-item completed' : 'task-item';
  }
  
  render() {
  	return (
  	  <li className={this.handleClassNames()}>
        <div className='task'>{ this.props.task.task }</div>
        <div className='due-date'>{ this.props.task.date }</div>
        <div className='complete-box'>
          <input
            type='checkbox'
            name='completed'
            id={this.props.task.id}
            onChange={this.handleChange}
          />  
        </div>
      </li>
  	)
  }
}

export default TaskItem;