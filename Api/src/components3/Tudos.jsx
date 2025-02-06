import React, { useRef, useState } from 'react'
import Parent from './parent';

const Tudos = () => {
    const [tudo,setTudo] = useState([]);
  

    const value = useRef("");
    let text;
    
    const handleTodo =() => {
        
        text = value.current.value;
        console.log(text);
    } 
    
    

  return (
    <>
    <h1>Todos</h1>
    <label> Name</label>
    <input type="text " value={text} ref={value}  />
    <button onClick={() => handleTodo()}> Add me</button>

    
    <Parent props={tudo} />
    </>
    
  )
}

export default Tudos;