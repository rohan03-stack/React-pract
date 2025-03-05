import React, { useContext, useEffect, useReducer } from 'react'
import { TodoContext } from '../Context/Context'
import { Reducer } from './Reducer';
import { DeleteTodo } from './Action';
import './tlist.css'


export const Tudolist = () => {

    const dataMai = useContext(TodoContext);

    const [state, dispatch] = useReducer(Reducer, dataMai.data)
     
    const  HandleDelete =(id) => {
   dispatch(DeleteTodo(id));
    }

    useEffect(() => {
      dataMai.setData(state);
    }, [state]);

  return (
    <>
    {dataMai.data && dataMai.data.map((el) => (

    
    <div key={el.id} className='list'>
     <h1>{el.text}</h1>
     <div className='btn'>
  <button>Edit</button>
  <button onClick = {() => HandleDelete(el.id)}>Delete</button>
     </div>
    </div>
    ))}
    </>
    
  )
}
