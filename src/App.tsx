import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';



export type FilterValuesType = 'all' | 'active' | 'completed'

function App() {

    let [tasks,setTasks] = useState( [
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "1", isDone: true },
        { id: 4, title: "2", isDone: true },
        { id: 5, title: "3", isDone: true },
        { id: 6, title: "ReactJS", isDone: false }
    ])

    function removeTask(id:number) {
        let filteredTasks = tasks.filter(task => task.id != id)
        setTasks(filteredTasks)
    }

    let [filter, setFilter] = useState<FilterValuesType>('all')
    let tasksForTodolist = tasks
    if(filter === 'active') {
        tasksForTodolist = tasks.filter(task => task.isDone === false)
    }
    if(filter === 'completed') {
        tasksForTodolist = tasks.filter(task => task.isDone === true)
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value)
    }


    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
