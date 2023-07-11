import React from 'react'
import './about.css'
import ME from '../../assets/me0.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { BiBook } from 'react-icons/bi'
import { VscFolderLibrary } from 'react-icons/vsc'
import { useState } from 'react'

const About = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>Skills</a>

            </article>

            <article className='about__card'>
              <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}>Experience</a>

            </article>

            <article className='about__card'>
              <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}>Projects</a>

            </article>
          </div>
          <p>I believe myself as proactive, and self-motivated, and always carry a positive attitude to learn new things & try to polish the skill sets required to thrive in challenging situations.</p>
          <p>
          Currently I am pursuing Applied Diploma Degree in Software Engineering at Lithan Academy, Singapore. With over a year of experience in Full Stack Development, I have worked with a variety of technologies, I am experienced in popular frameworks like Spring Boot, REST API, MySQL as well as Java. I am also well-versed in HTML, CSS, JavaScript, and Frameworks like Bootstrap, React, and AngularJS. I am also specialized in building user interfaces using Figma, and Axure. 
          </p>
          <p>
          At this stage of my career, I am eager to learn new technologies and looking for a company that will challenge my technical expertise while also providing me with attractive career opportunities. I am ready for any Software engineer, Database engineer, or UI engineer role.
          </p>
          <a href="https://youtu.be/wgTbYVTJ_Os" className='btn btn-primary'>Video Introduction</a>
        </div>
      </div>
    </section>
  )
}

export default About