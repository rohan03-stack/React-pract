import React, { useContext, useEffect, useReducer , useRef} from 'react'
import { TodoContext } from '../Context/Context'
import { Reducer } from './Reducer';
import { Addtodo } from './Action';
import { Tudolist } from './Tudolist';
import './todo.css'

export const Todos = () => {

    const contexsData = useContext(TodoContext);
    const  inputCatch = useRef("");

    const [state, dispatch] = useReducer(Reducer, contexsData.data);

    console.log(contexsData, "this is form");
    

    const handleInput = () => {
        let values = inputCatch.current.value;
        dispatch(Addtodo(values));
        inputCatch.current.value = "";
        
    };
    
    useEffect (() => {
      contexsData.setData(state);
    }, [state]);
    


  return (
    <>
  <h1>Todo</h1>
    <input className='inpt' type="text"  placeholder='enter the task' 
     
     ref={inputCatch}
    />

    <input className='inpt1' type="text" value="submit" onClick={handleInput} />

    <Tudolist />
    </>
  )
}
