import React, { Component } from 'react'

class CreateTask extends Component{

    constructor(props){
        super(props);

        this.state = {
            taskName:""
        }
    }

    changeHandler = (event) => {
        this.setState({taskName:event.target.value})
    }

    handleSubmit = () => {
        this.props.createTask(this.state.taskName);
        this.setState({taskName:""})
    }

    render(){
        return(
            <div>
                <input type="text" value={this.state.taskName} onChange={this.changeHandler}/><br/>
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    }
}

export default CreateTask;