import React, { useContext, useReducer , useRef} from 'react'
import { TodoContext } from '../Context/Context'
import { Reducer } from './Reducer';
import { Addtodo } from './Action';

export const Todos = () => {

    const contexsData = useContext(TodoContext);
    const  inputCatch = useRef("");

    const [state, dispatch] = useReducer(Reducer, contexsData.data);

    console.log(contexsData, "this is form");
    

    const handleInput = () => {
        let values = inputCatch.current.value;
        dispatch(Addtodo(values));
        inputCatch.current.value = "";
        contexsData.setdata(state)
    };
    console.log("check", state);
    


  return (
    <>
  <h1>Todo</h1>
    <input type="text"  placeholder='enter the task' 
     
     ref={inputCatch}
    />

    <input type="text" value="submit" onClick={handleInput} />
    </>
  )
}
