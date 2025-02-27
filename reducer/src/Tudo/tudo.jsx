import React, { useReducer, useState } from 'react'

import './tudo.css'

export const Tudo = () => {

  const initialStates = {todos : []};


  const AddTodo = {type: "ADDTODO"}

  // ...............................Reducer...................................

  const todoReducer = (state, action) => {
    switch (action.type) {
      case "ADDTODO":
        return {
          ...state,
          todos: [...state.todos, action.payload],
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(todoReducer, initialStates);
  const [todo, setTodo] = useState('');

  const handletodo = () => {
    if (todo.trim()) {
      dispatch({
        type: "ADDTODO",
        payload: todo,
      });

      setTodo('');
    }
  }

  return (
    <>
    <div className='center'>
<h1>todo App</h1>
<input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} placeholder="Enter Todo" />
<button onClick={handletodo}> +</button>

<ul>
  {state.todos.map((todo, index) =>  (
    <li key={index}>{todo}</li>
  ))}
</ul>

</div>

    </>
  )
}

