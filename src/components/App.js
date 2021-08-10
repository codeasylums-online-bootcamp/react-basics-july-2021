import React,{Component} from 'react';

import CreateList from './CreateList'
import List from './List'

class App extends Component {
    constructor(props){
        super(props)

        this.state = {
            lol: []
        }
    }

    createList = (listName) => {
        const {lol} = this.state
        this.setState({lol:[...lol,{
            listName:listName,
            tasks:[]
        }]
        })
    }

    deleteList = (index) => {
        let {lol} = this.state;

        const newLol = [...lol.slice(0,index),...lol.slice(index+1)]
        this.setState({lol:newLol})
    }

    createTask = (listIndex,taskName) => {
        
        let newState = {...this.state};

        let list = newState.lol[listIndex]

        list.tasks = [...list.tasks,
            {
                taskName:taskName,
                done:false
            }
        ]
        
        newState.lol[listIndex] = list

        this.setState({newState})
    }

    deleteTask = (listIndex, taskIndex) => {
        let newState = {...this.state}
        let list = newState.lol[listIndex]

        let taskList = list.tasks

        let newTaskList = [...taskList.slice(0,taskIndex),
                            ...taskList.slice(taskIndex+1)]

        newState.lol[listIndex].tasks = newTaskList
        this.setState({newState})
    }

    render(){
        return(
            <div>
                <CreateList createList={this.createList}/>
                {this.state.lol.map((list,idx) => 
                    <List key={`list-${idx}`} 
                    list={list}
                    index={idx} 
                    deleteList={this.deleteList}
                    createTask={this.createTask}
                    deleteTask={this.deleteTask}/>
                )}
            </div>
        );
    }
}

export default App;