import React from 'react'
import vue from '../assets/image-portfolio-master/vue.png'
import react from '../assets/image-portfolio-master/icon_react.png'
import html from '../assets/image-portfolio-master/html.png'
import css from '../assets/image-portfolio-master/css-logo.png'
import java from '../assets/image-portfolio-master/JavaScript-Logo.png'
import query from '../assets/image-portfolio-master/jquery.png'
import node from '../assets/image-portfolio-master/tailwindcss.png'
import tailwind from '../assets/image-portfolio-master/node.png'
import imghero from '../assets/image-portfolio-master/imghero.png'

const skillsData = [
  {id:1,image:html, title:'Html', description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, distinctio?'},
  {id:2,image:css, title:'Css', description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, distinctio?'},
  {id:3,image:java, title:'JavaScript', description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, distinctio?'},
  {id:4,image:query, title:'JQuery', description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, distinctio?'},
  {id:5,image:react, title:'React', description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, distinctio?'},
  {id:6,image:node, title:'Node Js', description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, distinctio?'},
  {id:7,image:tailwind,title:'Tailwind', description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, distinctio?'}
];

const slillsBox=({image,title, description}) => (
<article className='bg-gray-800 p-4 sm:p-6 rounded-lg  shadow-lg text-center hover:bg-purple-800  transition-all  duration-300'>
  <figure className='flex justify-center mb-4'>
    <img src={image} alt={title}  className='w-16 h-16 sm:w-20  sm:h-20 '/>
  </figure>
  <header>
    <h3 className='text-lg sm:text-xl font-semibold mb-2'>{title}</h3>
  </header>
  <p className='text-gray-400 text-sm sm:text-base'>{description}</p>
</article>
)
export default function Skills() {
  return (
    <section className='relative min-h-screen overflow-hidden flex flex-col items-center  justify-center text-white px-4 py-10'>
      <div className='absolute z-0 w-72 h-36  sm:w-96 sm:h-44 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 top-10 sm:top-28 left-1/2 transform -translate-x-1/2 '></div>
      <img src={imghero} alt="left picture" className='absolute z-10 left-2 top-2 sm:left-16 sm:top-32 transform -rotate-12 w-24 h-auto sm:w-32 opacity-70 ' />

      <div data-aos='fade-up' data-aos-delay='300' className='relative z-20 text-center space-y-6 sm:space-y-10'>
  <header>
    <h1 className='text-3xl sm:text-4xl font-bold '>
        My Experience <br /> and <span className='text-purple-400'>Slills</span>
    </h1>
    <p className='text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base'>
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum culpa earum dolorem vel ea soluta illum incidunt voluptatem quas ducimus!
    </p>
  </header>
  <section data-aos='fade-up' data-aos-delay='500' className='grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-4'>
{skillsData.map((skills) => (
  <slillsBox key={skills.id} image={slills.image} title={skills.title} description={slills.description} />
))}
  </section>
      </div>
    </section>
  )
}
