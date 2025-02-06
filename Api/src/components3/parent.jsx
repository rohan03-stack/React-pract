import React from 'react'

const Parent = ({props}) => {
    console.log(props, "props");
    
  return (
    <>
    {props.map((el, index) => (
    <div key={index}>
    <h1>{el.task}</h1>
    </div>
    ))}
    </>
  )
}

export default Parent;