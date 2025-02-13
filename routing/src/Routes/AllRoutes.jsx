
import {Routes, Route } from 'react-router-dom'
import HomePage from '../Components/HomePage'
import Abouts from '../Components/About'
import Contact from '../Components/Contact'
import Login from '../Components/Login'
import User from '../Components/User'
import NotFoundPage from '../Components/NotFoundPage'
import './Routes.css'


export const AllRoutes = () => {
  return (
    <>
    <div className='routes'>
    <Routes>
        <Route path='/home' element={<HomePage />}></Route>
        <Route path='/about' element={<Abouts />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/users' element={<User />}></Route>
        <Route path='*' element={<NotFoundPage/>}></Route>
    </Routes>
    </div>
    </>
  )
}
