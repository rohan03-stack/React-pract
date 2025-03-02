import React, { useReducer, useState } from 'react'

import './tudo.css'

export const Tudo = () => {

  const initialStates = {todos : [], 
    editingIndex: null,
    editext: '',};



  // ...............................Action...................................................
  const AddTodo = {type: "ADDTODO"}
  const DeleteTodo = {type : "EDITTODO"}

  // ...............................Reducer...................................

  const todoReducer = (state, action) => {
    switch (action.type) {
      case "ADDTODO":
        return {
          ...state,
          todos: [...state.todos, action.payload],
        };

        case "DELETETODO":
          return{
            ...state, todos: state.todos.filter((todos, index) => index !== action.payload)
          }

          case "EDITTODO":
            return{
              ...state,
              
            }


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

  const handleDeleteItem = (index) => {
    dispatch({ type: 'DELETETODO', payload: index});
  };


  return (
    <>
    <div className='center'>
<h1>todo App</h1>
<input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} placeholder="Enter Todo" />
<button onClick={handletodo}> +</button>

<ul>
  {state.todos.map((todos, index) =>  (
    <li key={index}>
      {todos }   <button>Edit</button>
      
      <button onClick={() => handleDeleteItem(index)}>-</button>

     
  
      </li>
      

    
  
  ))}

</ul>



</div>


    </>
  )
}

