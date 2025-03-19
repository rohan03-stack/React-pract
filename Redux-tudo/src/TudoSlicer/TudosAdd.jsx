import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodos } from './TudosSlicer';
import { TudoList } from '../TudosList/TudoList';

import './tudoadd.css'

export const TudosAdd = () => {

    const data = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const inputCatch = useRef("");

    const handleInput = () => {
        let values = inputCatch.current.value;
        dispatch(addTodos(values))
        inputCatch.current.value = "";
    };
    console.log(data);
    
  return (
    <>
    <input type="text" placeholder='Enter Todo'  ref={inputCatch}/>

    <button onClick={handleInput}>+</button>

    <TudoList />
    </>
    
  )
}
