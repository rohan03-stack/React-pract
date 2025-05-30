import {React, useEffect} from 'react';
import Aos from 'aos';

import { Hero } from './Components/Hero';

import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    Aos.init({
      duration:1000,
    })
  },[])

  return (
    <>
    
<main className='bg-black '>
 

</main>
<Hero />

    </>
  )
}

export default App
