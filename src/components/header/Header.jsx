import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me8.png'
import HeaderSocial from './HeaderSocials'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'



const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Nabila Afsana</h1>
        <h5 className="text-light">Software Engineer</h5>
      
        <h5 className="text-light">Address: Dhaka, Bangladesh</h5>
     
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="me" />

        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>


    </header>
  )
}

export default Header