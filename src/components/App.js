import React,{useState} from 'react';

import CreateList from './CreateList'
import List from './List'

const initialState = {
    lol: []
}
const App = (props) => {
    // constructor(props){
    //     super(props)

    //     this.state = {
    //         lol: []
    //     }
    // }

    const [state,setState] = useState(initialState)
    // const [s2,setS2] = useState(0)

    const createList = (listName) => {
        const {lol} = state
         setState({lol:[...lol,{
            listName:listName,
            tasks:[]
        }]
        })
    }

    const deleteList = (index) => {
        let {lol} =  state;

        const newLol = [...lol.slice(0,index),...lol.slice(index+1)]
         setState({lol:newLol})
    }

    const createTask = (listIndex,taskName) => {
        
        let newState = {...state};

        let list = newState.lol[listIndex]

        list.tasks = [...list.tasks,
            {
                taskName:taskName,
                done:false
            }
        ]
        
        newState.lol[listIndex] = list

         setState({newState})
    }

    const deleteTask = (listIndex, taskIndex) => {
        let newState = {...state}
        let list = newState.lol[listIndex]

        let taskList = list.tasks

        let newTaskList = [...taskList.slice(0,taskIndex),
                            ...taskList.slice(taskIndex+1)]

        newState.lol[listIndex].tasks = newTaskList
        setState({newState})
    }

    return(
        <div>
            <CreateList createList={createList}/>
            {state.lol.map((list,idx) => 
                <List key={`list-${idx}`} 
                list={list}
                index={idx} 
                deleteList={deleteList}
                createTask={createTask}
                deleteTask={deleteTask}/>
            )}
        </div>
    );
}

export default App;