import React, { useState } from 'react'

const initialState = {
    taskName:""
}

const CreateTask = (props) => {
    //useState returns an array of current_state and a function to update state
    // parameter is the initial state
    const [state, setState] = useState(initialState);

    const changeHandler = (event) => {
        setState({taskName:event.target.value})
    }

    const handleSubmit = () => {
        props.createTask(state.taskName);
        setState({taskName:""})
    }

    return(
        <div>
            <input type="text" value={state.taskName} onChange={changeHandler}/><br/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default CreateTask;