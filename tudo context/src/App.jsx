import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Add from './AddContext/Add'
import TudoList from './AddContext/TudoList'

function App() {
 

  return (
    <>
    <div>
      <Add />
      <TudoList />
      </div>
    </>
  )
}

export default App
