import React from 'react'

export const Counter = () => {
    const initialState = {count: 0};

    const [state, dispatch] =React.useReducer(Reducer,initialState)
  return (
    <>
    <h1>Count:{state.count} </h1>
    <button onClick={() => {dispatch(Increment)}}> +</button>
    <button onClick={() => {dispatch(Decrement)}}> -</button>
   
    </>
  )
}
