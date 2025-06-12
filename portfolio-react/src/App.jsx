import {React, useEffect} from 'react';
import Aos from 'aos';

import { Hero } from './Components/Hero';

import 'aos/dist/aos.css'
import About from './Components/About';
import Skills from './Components/Skills';
import Project from './Components/Project';

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
<Skills />
<Project />
</main>


    </>
  )
}

export default App
