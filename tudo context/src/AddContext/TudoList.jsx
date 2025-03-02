
import React, { useContext, useState } from 'react';
import { Context } from '../Context-Components/tedos';

import './tudoList.css'



const TodoList = () => {

  const data = useContext(Context);

  const [array, setArray] = useState('')
  const [editingId, setEditingId] = useState(null)

  const setHandleEdit = (id, currentTask) => {
    setEditingId(id);
    setArray(currentTask);
  }

  const handupdates = (id) => {
    if (array.trim()) {
      data.editTodo(id, array);
      setEditingId(null);
      setArray('');
    }
  }




  // console.log(data.todo[0].task,"todo");




  return (
    <>
      <div className='map'>
        {
          data.todo.map((el) => (
            <div key={el.id} className='maps'>

              {editingId===el.id ? (
                   <>
                   <input type="text" value={array} onChange={(e) => setArray(e.target.value)} />
                   <button onClick={() => handupdates(el.id)}>update</button>
                   </>

              ) : (
                <>
                {el.task}
             
             <button onClick={() => setHandleEdit(el.id, el.task)}><i class="fa-regular fa-pen-to-square"></i></button>
             <button onClick={() => data.deleteItem(el.id)}><i class="fa-solid fa-trash"></i></button>
                </>
              )}

               
              
            </div>


          ))
        }

     
       

      </div>
    </>
  );
};

export default TodoList;

