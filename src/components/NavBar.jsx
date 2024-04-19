import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
/* import img from "../../public/images/JAPPWORKOUT.JPG" */
import img from "../assets/img/JAPPWORKOUT.png"

function Nav() {

  return (
    <>
      <nav className='main-nav'>
      <Link to="/"><img src={img} alt="" className='nav-img'/></Link>
        <ul className='ul-nav'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </>
  )
}

export default Nav
