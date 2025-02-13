/* eslint-disable react/prop-types */


import React from 'react'
import { Authcontext } from '../Context/Context'
import { Navigate } from 'react-router-dom'

function PriveteRoute( { children }) {
  const {isAuth} = React.useContext(Authcontext)
  if (!isAuth) {
    return <Navigate to="/" />
  }
  return children
}

export default PriveteRoute
