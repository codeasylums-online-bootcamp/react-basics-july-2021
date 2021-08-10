import React, { Component } from 'react'
import CreateTask from './CreateTask'
import Task from './Task'

class List extends Component {

    createTask = (taskName) => {
        this.props.createTask(this.props.index,taskName)
    }

    deleteTask = (taskIndex) => {
        this.props.deleteTask(this.props.index,taskIndex)
    }    

    render(){
        const {deleteList,index,list} = this.props

        return(
            <div>
                {list.listName}
                <button onClick={() => deleteList(index)}>Del</button>
                <CreateTask createTask={this.createTask}/>
                {list.tasks.map((task,idx) => <Task 
                    key={`list-${index}-task-${idx}`}
                    task={task}
                    index={idx}
                    deleteTask={this.deleteTask}
                    />)}
            </div>
        );
    }
}

export default List;