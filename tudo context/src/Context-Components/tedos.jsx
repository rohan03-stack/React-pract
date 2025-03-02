import { createContext, useState } from "react";

import { nanoid } from 'nanoid'


export const Context = createContext(null);

export const ContextProvider = (props) => {
  const [todo, setTodo] = useState([]);

    const addTodos = (task) => {
      setTodo ([...todo, {"id": nanoid(), "task": task, "completed":false}])
    }
    const deleteItem = (id) => {
      setTodo(todo.filter((todo) => todo.id !== id))
    };

    const editTodo = (id, updatedTask) => {
      setTodo(todo.map(todo => todo.id === id ? { ...todo, task: updatedTask } : todo));
    };

    
   

  return <Context.Provider value={{ todo, addTodos,deleteItem, editTodo}}> {props.children}</Context.Provider>
}