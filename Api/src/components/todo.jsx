// import { Linter } from 'eslint';
import './todo.css'

import { useState } from "react";

function Apps() {
  const [value, setValue] = useState();
  const [todo, setTodo] = useState([]);

  const handleClick = () => {
    if (value !== '' && todo !== '') {
      setTodo([...todo, value]);
    }
  };


  return (
    <>
      <header>
        <h1>Todo List</h1>
      </header>


      <div className='Api'>
        <div className='input1'>
          <input onChange={e => setValue(e.target.value)} value={value} />
          <button onClick={handleClick}>Add Todo</button>
        </div>
        <div>
          <ol>
            {todo.map(todos =>
              <li>{todos}</li>
            )}


          </ol>
        </div>

      </div>
    </>


  )
}

export default Apps;