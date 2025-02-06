import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ConterContext } from './cmponents/counter'
import Counterbutton from './context/counterbutton'


function App() {
  const counterState = useContext(ConterContext);
  console.log("context", counterState);
  

  return (
    <>
    
     <div>
      <h1>Count is {counterState.count}</h1>
      <Counterbutton />
  
     </div>
    
      
    
    </>

  )
}

export default App
