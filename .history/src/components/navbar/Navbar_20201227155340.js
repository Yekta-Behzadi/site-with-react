import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className="navbar">
      <div className="nav-container">
        <Link to= '/' className='' ></Link>
      </div>
    </nav>
    </>
  )
}

export default Navbar
