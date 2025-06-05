import React from 'react'
import vue from '../assets/image-portfolio-master/vue.png'
import react from '../assets/image-portfolio-master/icon_react.png'
import html from '../assets/image-portfolio-master/html.png'
import css from '../assets/image-portfolio-master/css-logo.png'
import java from '../assets/image-portfolio-master/JavaScript-Logo.png'
import query from '../assets/image-portfolio-master/jquery.png'
import node from '../assets/image-portfolio-master/tailwindcss.png'
import tailwind from '../assets/image-portfolio-master/node.png'

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
<article className='bg-gray-800 p-4 sm:p-6 rounded-lg  shadow-lg text-center'>

</article>
)
export default function Skills() {
  return (
    <div>
        <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, distinctio?

        </div>
    </div>
  )
}
