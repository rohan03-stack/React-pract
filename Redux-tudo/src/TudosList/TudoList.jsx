import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './list.css'
import { deleteTodos } from '../TudoSlicer/TudosSlicer';

export const TudoList = () => {
    const data = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const  HandleDelete = (id) => {
      dispatch(deleteTodos(id));
       }
   
  return (
    <>
   {
    data.map((el) => (
        <div key={el.id}> 
            <li>
              {el.text}
              <button onClick={() => HandleDelete(el.id)}>Del</button>
              </li>
        </div>
    ))
   }
    </>
  )
}
