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
              <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook />&nbsp;Skills</a>

            </article>

            <article className='about__card'>
              <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FaAward />&nbsp;Experience</a>

            </article>

            <article className='about__card'>
              <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><VscFolderLibrary />&nbsp;Projects</a>

            </article>
          </div>
          <p>I am a <strong>proactive and self-motivated</strong> individual with a positive attitude towards learning and personal growth. With a background in <strong>Electrical and Electronic Engineering</strong>, I started my career as a Research and Development Executive in an electro-mechanical engineering firm. In addition to my full-time work, I have <strong>remote</strong>  work experience as an <strong>SEO Content Editor and Mentor</strong>. I have successfully managed WordPress content, implemented SEO strategies, handled social media marketing, and overseen a team of writers.
          </p>
          <p>
            In pursuit of my passion for <strong>software programming</strong>, I am currently pursuing the Lithan Higher Diploma degree in Computer Science and Engineering since September 2022. Throughout this academic journey, I have completed various front-end and back-end projects using HTML, CSS, Bootstrap, JAVA, Spring Boot, React JS, My SQL, Liferay, Axure, Figma, and so on. And, I have gained a valuable hands-on experience in software development.
          </p>
          <p>
            I am enthusiastic about exploring new technologies, expanding my skill set, and embracing challenging situations. With a strong foundation in  <strong>engineering</strong>and growing expertise in <strong>software programming</strong>, I am ready to take on new opportunities in the <strong>software development field</strong>.
          </p>
          <a href="#contact" className='btn btn-primary'>Video Introduction</a>
        </div>
      </div>
    </section>
  )
}

export default About