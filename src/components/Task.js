import React from 'react'

const Task = (props) => {
    const {deleteTask, index, task} = props

    return(
        <div>
            {task.taskName} <button onClick={()=> deleteTask(index)}>Del</button>
        </div>
    );
}

export default Task;