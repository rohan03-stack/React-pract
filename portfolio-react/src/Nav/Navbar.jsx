import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

export const Navbar = () => {
  return (
    <div>
        <div className="nav">
            <div className="log">
                <h1>Rangers</h1>
            </div>
            <div className="link">
               <ul>
                <li>
                <Link to='/' className='it'>Home</Link>
                </li>
                <li>
                <Link to='/about' className='it'>About Me</Link>
                </li>
                <li>
                <Link to='/works' className='it'>Works</Link>
                </li>
                <li>
                <Link to='/blogs' className='it'>Blogs</Link>
                </li>
                
               </ul>
            </div>
            <div className="but">
                <button>Get in Touch</button>
            </div>
        </div>
    </div>
  )
}
