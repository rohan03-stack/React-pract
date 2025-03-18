import React from 'react'
import './About.css'
import { Log } from './Log'
import { Works } from './Works'
export const About = () => {
  return (
    <>
    <div className='bg2'>
    <div className="about">
        <div className="logos">
           <img src="https://c4.wallpaperflare.com/wallpaper/887/817/276/html-5-html-5-logo-wallpaper-thumb.jpg" alt="" className='img2' />

           <img src="https://static.vecteezy.com/system/resources/previews/012/039/733/non_2x/css-letter-logo-design-with-black-background-in-illustrator-logo-modern-alphabet-font-overlap-style-calligraphy-designs-for-logo-poster-invitation-etc-vector.jpg" alt=""  className='img3'/>

           <img src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-black-and-white.png" alt="" className='img4' />

           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWdhg95IWWkNd0V5jXsLQqqiBMtTes3Ba5qA&s" alt="" className='img5' />

           <img src="https://4kwallpapers.com/images/wallpapers/python-logo-dark-2880x1800-16094.png" alt=""  className='img6'/>
        </div>
        <div className="about-us">
            <h1>About Me</h1>
            <p> I'm passionate Full Stack Developer with expertise in both front-end and back-end technologies. With a strong foundation in web development, I specialize in building seamless, interactive, and scalable web applications. </p>
            <p>My goal is to create clean, maintainable, and efficient code while continuously improving user experiences and application performance.</p>
            <p>I have hands-on experience with modern web technologies including HTML, CSS, JavaScript, React, Node.js, and various databases such as MongoDB and PostgreSQL.</p>
        </div>
    </div>
    </ div>
    
    <Log />
    <Works/>
    </>
  )
}
