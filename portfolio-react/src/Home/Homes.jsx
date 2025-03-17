import React from 'react'
import './Home.css'
import { About } from './About'

export const Homes = () => {
  return (
    <>
    <div className='bg'>
    <div className="header">
      <div className="head">
      <h1>
        Create Your Website in less Than 12days
      </h1>
      <p>Hi, I'm Rohan Gaikwad, a passionate and driven full-stack developer with experience in building scalable and user-friendly web applications. With a strong foundation in both front-end and back-end technologies,</p>

      <button>Get in Touch</button>
      </div>

      <div className="img1">
        <img src="https://st3.depositphotos.com/10654668/17288/i/450/depositphotos_172880694-stock-photo-mature-man-in-bar.jpg" alt="" />
      </div>
      
    </div>
    
    </ div >

    <About />
    </>
  )
}
