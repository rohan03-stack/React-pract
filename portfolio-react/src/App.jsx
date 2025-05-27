import {React, useEffect} from 'react';
import Aos from 'aos';

// import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    Aos.init({
      duration:1000,
    })
  },[])

  return (
    <>
    
<main className='bg-black'>
 

</main>
  
    </>
  )
}

export default App
