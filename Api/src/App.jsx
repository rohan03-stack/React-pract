import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Todo from './components/todo'
import Child from './props/child'
import Tudos from './components3/Tudos'

function App() {
   const [data, setData] = useState("parents")
  

  return (
  <>
  

<div className="conatiner">
  {/* <Todo /> */}
  <Child props={data}/>
  {/* <Tudos /> */}
  </div>
  </>
  
  )
}

export default App
