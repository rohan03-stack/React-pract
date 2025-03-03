import React, { useReducer, useState } from 'react'
import { nanoid } from 'nanoid'

import './tudo.css'

export const Tudo = () => {

  const initialStates = { todos: [] };



  // ...............................Action...................................................
  const AddTodo = { type: "ADDTODO" }
  const Edittodo = { type: "UPDATETODO" }

  // ...............................Reducer...................................

  const todoReducer = (state, action) => {
    switch (action.type) {
      case "ADDTODO":
        console.log(state, "this is added")
        return {
          ...state,
          todos: [...state.todos, { "id": nanoid(), "task": action.payload }],
        };

      case "DELETETODO":  
        return {
          ...state, todos: state.todos.filter((todo) => todo.id !== action.payload)
        };

      case "UPDATETODO":
        return {
          ...state, todos: state.todos.map((todo) => (todo.id === action.id ? { ...todo, task: action.payload } : todo)),

        }






      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(todoReducer, initialStates);
  const [todo, setTodo] = useState('');
  const [editingId, setEditingId] = useState(null)

  const handletodo = () => {
    if (todo.trim()) {
      dispatch({
        type: "ADDTODO",
        payload: todo,
      })
      setTodo('');
    }
  }

  const handleDeleteItem = (index) => {
    dispatch({ type: 'DELETETODO', payload: index });
  };


  const Editing = (id, currentTask) => {
    setEditingId(id)
    setTodo(currentTask)
  }

  const UpdateTodos = () => {
    if (todo.trim()) {
      dispatch({ type: "UPDATETODO", id : editingId ,  payload: todo })
      setEditingId(null)
      setTodo('')
    }
  }









  return (
    <>
      <div className='center'>
        <h1>todo App</h1>

        <input type="text" name='name' placeholder='Enter the Name'
          onChange={(e) => setTodo(e.target.value)} />

        <button onClick={handletodo}>+</button>



        <ul>
          {state.todos.map((el) => (
            <li key={el.id}>

              {editingId === el.id ? (
                <>
                  <input type="text" name='name'
                onChange={(e) => setTodo(e.target.value)} />
                
                <button onClick={() => UpdateTodos(el.id)}>UP</button>
                  </>

              ) : (

                <>
                    {el.task}
                
              <button onClick={() => Editing(el.id, el.task)}>Edit</button>
              <button onClick={() => handleDeleteItem(el.id)}>-</button>
                </>
              )}
            




          








            </li>




          ))}

        </ul>



      </div>


    </>
  )
}

