import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Nabila Afsana</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Expeirience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/nabila-afsana-245a42250/" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/nabilax/nabilaafsana-profile" target="_blank"><FaGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; NabilaAfsana. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer