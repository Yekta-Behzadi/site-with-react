import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
const [click, setClick] = useState(false)

const handleClick = ()=>setClick(!click)

  return (
    <>
    <nav className="navbar">
      <div className="navbar-container">
        <Link to= '/' className='navbar-logo' >
          <a>
           LOGO <i class="fab fa-typo3"></i>
            </a>
            </Link>
            <div className="menu-icon" onClick={handleClick} >
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? } ></ul>
      </div>
    </nav>
    </>
  )
}

export default Navbar
