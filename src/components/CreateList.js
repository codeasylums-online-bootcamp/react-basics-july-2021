import React, { useState } from 'react'

const initialState = {
    listName:""
}

const CreateList = (props) => {

    // constructor(props){
    //     super(props);

    //     this.state = {
    //         listName:""
    //     }
    // }

    const [state, setState] = useState(initialState)

    const changeHandler = (event) => {
        setState({listName:event.target.value})
    }

    const handleSubmit = () => {
        props.createList(state.listName);
        setState({listName:""})
    }

    return(
        <div>
            <input type="text" value={state.listName} onChange={changeHandler}/><br/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default CreateList;