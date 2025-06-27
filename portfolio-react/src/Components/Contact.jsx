import React from 'react'

import imghero from '../assets/image-portfolio-master/imghero.png'

export default function Contact() {
  return (
   <section data-aos='fade-up' data-aos-delay='300'
   className='min-h-screen overflow-hidden flex items-center p-6 mt-10 relative' >
           <article className='shadow-lg rounded-lg flex flex-col md:flex-row  max-w-4xl w-full relative'>
            <aside className='w-full md:w-1/2 relative'>
               <div className='absolute z-0 top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[#400px] h-[300px] sm:h-[400px] rounded-full bg-gradient-to-r from-[#6d2897] via-[#8e6cf5] to-[#bb61c5] shadow-[0_0_70px_rgba(182,0,182,0.7)]'></div>
               <img src={imghero} alt="" className='h-[250px] sm:h-[400px] md:h-[485px] w-[300px] sm:w-[480px] object-cover *:' />
               </aside>
           </article>
   </section>
  )
}
