import React from 'react'

import img1 from '../assets/image-portfolio-master/img_about1.png'
import img2 from '../assets/image-portfolio-master/img_about2.png'
import img3 from '../assets/image-portfolio-master/img_about.png'


export default function About() {
  return (
  <section id='about' className='min-h-screen overflow-hidden flex items-center  justify-center text-white px-4 sm:px-6'>
    <div className='max-w-6xl  w-full grid grid-cols-1 lg:grid-cols-2 gap-8  sm:gap-12 items-center'>
        <figure data-aos='fade-right' data-aos-delay='500' className='flex flex-wrap justify-center gap-4 relative'>
   <div className='h-[200px] sm:h-[300px] w-[300px] sm:w-[400px] lg:w-[300px] bg-gradient-to-1 from-[#6d2897]'></div>
        </figure>
    </div>
  </section>
  )
}
