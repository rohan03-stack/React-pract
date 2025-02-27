import React from 'react'
import { Decrement, Increment, Reset } from './Action';
import { Reducer } from './Reducer';

export const Counters = () => {
    const initialState = {count: 0};

    const [state, dispatch] =React.useReducer(Reducer,initialState)

  return (
    <>
    <h1>Count:{state.count} </h1>
    <button onClick={() => {dispatch(Decrement)}}> -</button>
    <button onClick={() => {dispatch(Increment)}}>+</button>
    <button onClick={() => {dispatch(Reset)}}>Reset
      
    </button>
   
    </>
  )
}
