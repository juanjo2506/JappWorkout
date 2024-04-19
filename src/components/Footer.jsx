import React from 'react'
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import img from "../assets/img/JAPPWORKOUT.png"
function Footer() {
  return (
    <footer>
        <ul className='Social-media'>
            
            <li><a href="https://github.com/juanjo2506" target="_blank"><FontAwesomeIcon icon={faGithub}/></a></li>
            <li><a href="https://www.facebook.com/jaason.voorhes/" target="_blank"><FontAwesomeIcon icon={faFacebook}/></a></li>
            <li><a href="https://www.linkedin.com/in/juan-jose-tellez-292698251/" target="_blank"><FontAwesomeIcon icon={faLinkedin}/></a></li>
            <li><a href="https://www.linkedin.com/in/juan-jose-tellez-292698251/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a></li>
        </ul>
        <img src={img} alt="" className='footer-img'/>
        <p className='Copyright'>Copyright©2024 JAPPWORKOUT</p>
    </footer>
  )
}

export default Footer