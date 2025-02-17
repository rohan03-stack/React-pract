
import React from 'react'
import { Authcontext } from '../Context/Context';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const {toggelAuth} = React.useContext(Authcontext);
  const navigat = useNavigate();
  if (toggelAuth){
    navigat("/users")
  }
  return (
    <div>
     <h1>Home</h1> 
     <button onClick={toggelAuth}> Login</button>
    </div>
  )
}

export default HomePage;
