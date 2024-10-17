
import { useState } from 'react'
import AddTask from './AddTask/AddTask'
import './App.css'
import TaskList from './Task/TaskList'

let nextId =3 ;
const initialTasks=[
  {id:0,text:'get up at 6am',done:true},
  {id:1,text:'take breakfast at 7 am',done:false},
  {id:2,text:'study',done:false}
];

function App() {
  const [tasks,setTasks]=useState(initialTasks);

  const handleAddTask=(text)=>{
    setTasks([
      ...tasks,
      {
        id:nextId++,
        text:text,
        done:false,
      }
    ])
  }

const handleChangeTask=(task)=>{
  setTasks(
    tasks.map((t)=>{
      (t.id===task.id)?task:t;
    })
  )
}

const handleDeleteTask=(taskId)=>{
  setTasks(tasks.filter((t)=>t.id!==taskId))
}



  return (
   <div>
   <h1>Task Manager</h1>
   <AddTask onAddTask={handleAddTask}
   ></AddTask>
    <TaskList
    tasks={tasks}
    onChangeTask={handleChangeTask}
    onDeleteTask={handleDeleteTask}
    ></TaskList>


   </div>
  )
}

export default App
