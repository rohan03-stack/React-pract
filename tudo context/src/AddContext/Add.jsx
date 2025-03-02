import React, { useContext, useState } from 'react'
import { Context } from '../Context-Components/tedos';
import './add.css'
import TodoList from './TudoList';

function Add() {
    const [task, setTask] = useState('');
    const data = useContext(Context);
    // console.log(data);

    

    const HandleAdd = () => {
  if(task.trim()){
    data.addTodos(task)
    setTask('')
  }
    }
    
  return (
    
    <div className='Todo-List'>
      <h1>Todo List</h1>
      <input type="text" value={task} placeholder='Enter The Value' onChange={(e) => setTask(e.target.value)} />
      <button onClick={HandleAdd}>+</button> 
    </div>
  )
}

export default Add;
