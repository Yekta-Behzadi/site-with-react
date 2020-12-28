import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className="navbar">
      <div className="navbar-container">
        <Link to= '/' className='navbar-logo' >
          <a><i class="fab fa-pied-piper-hat"></i></a></Link>
      </div>
    </nav>
    </>
  )
}

export default Navbar
