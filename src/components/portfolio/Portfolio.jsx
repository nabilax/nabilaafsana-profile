import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/kn2.png'
import IMG2 from '../../assets/ac2.png'
import IMG3 from '../../assets/aj2.png'
import IMG4 from '../../assets/aaw2.png'
import IMG5 from '../../assets/al2.PNG'
import IMG6 from '../../assets/cont2.PNG'

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Know Your Neighbour Project',
    para: 'A website application that provides users with information about their local neighborhood',
    soft: '#React #Bootstrap #Axios #Spring Boot #Spring Security #OAuth2 #MySQL',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  },
  {
    id: 2,
    image: IMG2,
    title: 'ABC Cars Portal Project',
    para: 'A website application that offers a convenient marketplace for buying and selling used cars',
    soft: '#Bootstrap #Spring Boot #Spring Security #JSP #MySQL',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 3,
    image: IMG3,
    title: 'ABC Jobs Portal Project',
    para: 'A website application that allows user find job and apply for job opportuinites',
    soft: '#Bootstrap #SpringMVC #JSP #MySQL',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
    id: 4,
    image: IMG4,
    title: 'AAA Web Solutions Project',
    para: 'A website application that provides all types of Hosting services',
    soft: '#Liferay #MySQL',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress'
  },
  {
    id: 5,
    image: IMG5,
    title: 'ABC Learning Center Project',
    para: 'A website dedicated that conducts courses incuding Front-end and Back-end Web development.',
    soft: '#HTML #CSSS #JavaScript',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Wordpress Content Management',
    para: 'Website name: www.coderclick.com',
    soft: '#keyword research  #content management #SEO',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/15887665-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Recent Work</h5>
      <h2>My Project</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, para, soft, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              <h3>{title}</h3>
              <h5>{para}</h5>
              <h4 style={{color: 'steelblue'}}>{soft}</h4>
              </div>
              {/* <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div> */}
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio