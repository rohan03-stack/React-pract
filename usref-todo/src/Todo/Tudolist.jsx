import React, { useContext, useReducer } from 'react'
import { TodoContext } from '../Context/Context'
import { Reducer } from './Reducer';

export const Tudolist = () => {

    const dataMai = useContext(TodoContext);

    const [state, dispatch] = useReducer(Reducer, dataMai.data)
    

  return (
    <>
    <div key={el.id}>
     <h1>{el.task}</h1>
     <div className='btn'>
  <button>Edit</button>
  <button onClick={HandleDelete}>Delete</button>
     </div>
    </div>
    </>
  )
}
