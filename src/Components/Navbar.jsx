import React from 'react'
import '../Styles/Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <div className='Navbar'>
      <h2>Logo</h2>
      <div className='navigation'>
        <ul>
          <li><Link to={'about'} className='Options'>About us</Link></li>
          <li><Link to={'projects'} className='Options'>Projects</Link></li>
          <li><Link to={'members'} className='Options'>Members</Link></li>
          <li><Link to={'contact'} className='Options'>Contact</Link></li>
        </ul>
      </div>
      <Link className='LoginLink' to={'login'}>Login</Link>
    </div>
  )
}

export default Navbar
