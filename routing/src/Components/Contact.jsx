

import React from 'react'
import { Authcontext } from '../Context/Context'

function Contact() {

  const data = React.useContext(Authcontext);
  console.log(data);
  
  return (
    <>
      <h1>Contact</h1>
    </>
  )
}

export default Contact

