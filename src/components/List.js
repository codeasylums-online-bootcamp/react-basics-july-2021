import React from 'react'
import CreateTask from './CreateTask'
import Task from './Task'

const List = (props) => {

    const createTask = (taskName) => {
        props.createTask(props.index,taskName)
    }

    const deleteTask = (taskIndex) => {
        props.deleteTask(props.index,taskIndex)
    }    

    const {deleteList,index,list} = props

    return(
        <div>
            {list.listName}
            <button onClick={() => deleteList(index)}>Del</button>
            <CreateTask createTask={createTask}/>
            {list.tasks.map((task,idx) => <Task 
                key={`list-${index}-task-${idx}`}
                task={task}
                index={idx}
                deleteTask={deleteTask}
                />)}
        </div>
    );
}

export default List;