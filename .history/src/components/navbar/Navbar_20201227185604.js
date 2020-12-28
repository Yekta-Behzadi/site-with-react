import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
const [c, setc] = useState(initialState)



  return (
    <>
    <nav className="navbar">
      <div className="navbar-container">
        <Link to= '/' className='navbar-logo' >
          <a>
           LOGO <i class="fab fa-typo3"></i>
            </a>
            </Link>
            <div className="menu-icon">
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} ></i>
            </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar
