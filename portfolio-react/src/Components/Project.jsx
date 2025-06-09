import React from 'react'

import htmlproj from '../assets/image-portfolio-master/htmlproject.png'

import reactproj from '../assets/image-portfolio-master/React.png'

import project3 from '../assets/image-portfolio-master/project3.png'

const ProjectCard  = ({image, title, description, link}) => {
return(
  <article className='relative max-w-sm bg-gray-800  rounded overflow-hidden  shadow-lg group'>
  <div className='absolute z-0 w-40 h-40 sm:w-60  sm:h-60 bg-[#cd3cf5] rounded-full blur-3xl  opacity-50 -top-5 left-10'>

  </div>

  <div className='relative z-10'>
    <figure className='relative'>
  <img src={image} alt={title} className='w-full h-48 object-cover  transition-transform duration-300  group-hover:scale-110'  />

  <a href={link} target='_blank' rel='noopener noreferrer' className='absolute h-[202px]  inset-0 flex items-center justify-center bg-purple-800 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 '>

    <button className='bg-white font-medium  text-black py-2 px-4 rounded-3xl shadow hover:text-white hover:bg-[#2879d5]'>
      Live Priview
    </button>
  </a>
    </figure>

    <div className='px-6 py-4'>
<header>
  <h3 className='text-white font-bold text-xl nb-2'>{title}</h3>
</header>
<p className='text-gray-200 text-base '>{description}</p>
    </div>
  </div>
  </article>
)
}



export default function Project() {
  const projects = () => {
  const listProjects = [
    {
      image:htmlproj,
      title:'Html CSS Project',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      link:''
    },

    {
      image:reactproj,
      title:'React Ecommerce Project',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      link:''
    },
    {
      image:project3,
      title:'Website Project',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      link:''
    },
     {
      image:htmlproj,
      title:'Html CSS Project',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      link:''
    },

    {
      image:reactproj,
      title:'React Ecommerce Project',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      link:''
    },
    {
      image:project3,
      title:'Website Project',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      link:''
    }
    
  ]
}
  return (
   <main className='p-4'>
      <section data-aos= 'fade-up' data-aos-delay='300' >
        <header className='text-center'>
      <h1 className='text-3xl'></h1>
        </header>
  </section> 
   </main>
  )
}
