import React, { Component } from 'react';
import TaskItem from './taskItem'

class TaskList extends Component {
  render() {
  	return (
  	  <React.Fragment>
   	    <h3>Outstanding Tasks</h3>
   	    <ul>{ this.props.tasks.map((task, ndx) => (
   	      <TaskItem
   	        key={ndx}
   	        task={task}>
   	        {task.value}
   	      </TaskItem>
   	      ))}
   	    </ul>
  	  </React.Fragment>
  	)
  }
}

export default TaskList;