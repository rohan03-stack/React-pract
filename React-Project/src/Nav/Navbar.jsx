import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

export const Navbar = () => {
  return (
    <>
    <div className="navbar">
        <div className="logo">
            <img src="https://cdn.prod.website-files.com/66b04d5d579de4c891b7d35c/66b04d5d579de4c891b7d389_logo.svg"  />
        </div>
        <div className="ul">
          <li>
           <Link to="/" className='link'>Product</Link>
          </li>
          <li>
           <Link to="/" className='link'>Industries</Link>
          </li>
          <li>
           <Link to="/" className='link'> Testimonials</Link>
          </li>
          <li>
           <Link to="/" className='link'>Why AB? </Link>
          </li>
<div className="bt">
<button>Quick Quate <i class="fa-solid fa-arrow-right"></i></button>
</div>
          
          <img src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-icon-download-in-svg-png-gif-file-formats--crispy-user-interface-pack-icons-462145.png?f=webp" alt="" />
        </div>

   
         
      
    </div>
    <div className="boundries">
      
    </div>
    </>
  )
}
