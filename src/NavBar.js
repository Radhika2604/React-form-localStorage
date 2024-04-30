import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <nav className="navbar  navbar-expand-md navbar-light bg-light  shadow-sm">
  <div className="container">
   
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/"><button type="button" className="btn btn-outline-primary">Personal details</button></NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link active" to="/tab2">  <button type="button" className="btn btn-outline-primary">Business details</button>
</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/tab3">  <button type="button" className="btn btn-outline-primary">Loan Application details</button>
</NavLink>
        </li>
       
      </ul>
   
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar