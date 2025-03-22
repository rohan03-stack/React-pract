import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './list.css'
import { deleteTodos, editTodos, updateTodo } from '../TudoSlicer/TudosSlicer';

export const TudoList = () => {
    const data = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const upadateDtaa = useRef("");

    const  HandleDelete = (id) => {
      dispatch(deleteTodos(id));
       }

       const HandleEdit = (id) => {
        dispatch(editTodos(id));
       }

       const Update = (id) => {
        let values = upadateDtaa.current.value;
        dispatch(updateTodo({text: values, id: id}))
       }
   
  return (
    <>
   {data && data.map((el) => el.isEdit && el.isEdit ? (
    <div key={el.id}>
<input defaultValue={el.text} type="text" ref={upadateDtaa} />
<button>cancel</button>
<button onClick={() => Update(el.id)}>Update</button>
    </div>
   ) : (
    <div key={el.id}>
      <li>{el.text}
        <button onClick={() => HandleEdit(el.id)}>Edits</button>
        <button onClick={() => HandleDelete (el.id)}>Del</button>
      </li>

    </div>

   )
  )}
    </>
  )
}
