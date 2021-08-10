import React, { Component } from 'react'

class CreateList extends Component{

    constructor(props){
        super(props);

        this.state = {
            listName:""
        }
    }

    changeHandler = (event) => {
        this.setState({listName:event.target.value})
    }

    handleSubmit = () => {
        this.props.createList(this.state.listName);
        this.setState({listName:""})
    }

    render(){
        return(
            <div>
                <input type="text" value={this.state.listName} onChange={this.changeHandler}/><br/>
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    }
}

export default CreateList;