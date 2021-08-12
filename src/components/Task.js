import React,{useEffect} from 'react'

const Task = (props) => {

    useEffect(()=>{
        console.log(`task with name ${props.task.taskName} created`)
    },[props.index,props.task.taskName])

    const {deleteTask, index, task} = props

    return(
        <div>
            {task.taskName} <button onClick={()=> deleteTask(index)}>Del</button>
        </div>
    );
}

export default Task;