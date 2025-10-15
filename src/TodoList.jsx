import React, { useState } from 'react'
import BackBtn from './BackBtn';

export default function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");

    function handleTasks() {
        setTasks([...tasks,task]);
        setTask("");
    }
    function handleDelete(indexToRemove) {
    setTasks(tasks.filter((task, index) => index !== indexToRemove));
    }
    function editTask(indexToEdit){
        setTasks(tasks.filter((task, index) => index !== indexToEdit));
        setTask(tasks.filter((task, index) => index == indexToEdit));        
    }
  return (
    <div>
      Todo List <br />
      <input type="text" value={task} placeholder='Enter the task name' onChange={(event) => {setTask(event.target.value)}}/>
      <button onClick={handleTasks}>Add Task</button>

      <ul>
        {tasks.map((task,index) => {
            return <><li key={index}>{task} - <button onClick={() => handleDelete(index)}>Delete</button> <button onClick={() => editTask(index)}>Edit</button></li><br /></>
        })}
      </ul>
      <br /><br /><BackBtn label={'Back to List'} /> <br /><br />
      
    </div>
  )
}
