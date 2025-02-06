import React, { useContext } from 'react'
import { ConterContext } from '../cmponents/counter'

function Counterbutton() {
    const counterContextbutton = useContext(ConterContext);


  return (
    <>
    <div className="counter">
        <button onClick={() => counterContextbutton.setCount(counterContextbutton.count+1)}> Increament</button>
        <button onClick={() => counterContextbutton.setCount(counterContextbutton.count-1)}> Decrement</button>

        <button></button>
    </div>
    </>
  )
}

export default Counterbutton;
