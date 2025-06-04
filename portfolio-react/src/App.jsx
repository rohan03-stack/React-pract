import {React, useEffect} from 'react';
import Aos from 'aos';

import { Hero } from './Components/Hero';

import 'aos/dist/aos.css'
import About from './Components/About';

function App() {
  useEffect(() => {
    Aos.init({
      duration:1000,
    })
  },[])

  return (
    <>
    
<main className='bg-black '>
 
<Hero />
<About />
</main>


    </>
  )
}

export default App
