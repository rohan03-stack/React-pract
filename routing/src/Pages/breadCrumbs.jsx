import { Link, useLocation } from "react-router-dom"

import './bread.css'


export const BreadCrumbs = () => {

    const location = useLocation();
    console.log(location, "this is a location");

    let currentLink = ""

    const crumbs = location.pathname.split('/').filter(crumb => crumb !== '' ).map(crumb => {
        currentLink += `/${crumb}`
        return(
            <div className="crumb" key={crumb}>
      <Link to={currentLink} className="lin">{crumb}</Link> 
            </div>
        )
    })
    console.log(crumbs, "this is crumb");
    
    
  return (
    <>
    <div className="breads">
    {crumbs}
    </div>
    
    </>
  )
}
