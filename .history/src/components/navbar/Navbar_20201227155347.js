import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className="navbar">
      <div className="nav-container">
        <Link to= '/' className='nav-logo' ></Link>
      </div>
    </nav>
    </>
  )
}

export default Navbar
