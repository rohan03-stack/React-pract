
import {Routes, Route } from 'react-router-dom'
import HomePage from '../Components/HomePage'
import Abouts from '../Components/About'
import Contact from '../Components/Contact'
import Login from '../Components/Login'
import User from '../Components/User'
import PriveteRoute from '../Components/PriveteRoute'
import NotFoundPage from '../Components/NotFoundPage'
import './Routes.css'
import { SinglePage } from '../Pages/singlePage'


export const AllRoutes = () => {
  return (
    <>
    <div className='routes'>
    <Routes>
        <Route path='/home' element={<HomePage />}></Route>
        <Route path='/about' element={<Abouts />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/users' element={<PriveteRoute><User /></PriveteRoute>}></Route>
        <Route path='users/:id' element={<PriveteRoute> <SinglePage /> </PriveteRoute>}></Route>

        <Route path='*' element={<NotFoundPage/>}></Route>
    </Routes>
    </div>
    </>
  )
}
