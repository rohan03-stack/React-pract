import React from 'react'
import { useSelector } from 'react-redux';
import './list.css'

export const TudoList = () => {
    const data = useSelector((state) => state.todos);
  return (
    <>
   {
    data.map((el) => (
        <div key={el.id}> 
            <li>{el.text}</li>
        </div>
    ))
   }
    </>
  )
}
