
import { NavLink } from 'react-router-dom'
import './Navbar.css'

export const Navbar = () => {

    const links = [
        {path : "/home" , title: "Home"},
        {path : "/about" , title: "About"},
        {path : "/contact" , title: "Contact"},
        {path : "/login" , title: "Login"},
        {path : "/users" , title: "Users"},
    ]
    const defaultStyle = {
        color: "white"
    }
    const activeStyle = {
  color: "tomato"
    }
  return (
    <>
    <div className='nav'>
{
    links.map((data) => (
        <NavLink style={({isActive}) => {
          return isActive ? activeStyle :defaultStyle;
        }} key={data.path} to={data.path} end className='navlink'> 
        {data.title}
        

        </NavLink>
    ))
}
    </div>
    </>
  )
}
