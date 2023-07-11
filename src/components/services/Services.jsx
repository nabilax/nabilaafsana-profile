import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
import {BsFillBagDashFill} from 'react-icons/bs'


const Services = () => {
  return (
    <section id='services'>
      <h5>What Experience I Have</h5>
      <h2>My Experience</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Research & Development Executive</h3>
            <h3> <BsFillBagDashFill className='service__head-icon' /> EMACO Solutions Ltd </h3>
            <h3>Nov 2020 - Present (Part time)</h3>      
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Developed product datasheet, catalogs, submittals.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Developed project proposal, web content: <a href="https://emacoglobal.com/all-solutions/emaco-clean-agent-fire-suppression-system/" target="_blank">emacoglobal.com</a> , social media content.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>WordPress Web Content Manager</h3>
            <h3> <BsFillBagDashFill className='' /> Writing School, BD </h3>
            <h3>Aug 2019 – Mar 2021 (Part time) </h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Managed website content: <a href="https://www.coderclick.com/how-to-remove-scratches-from-apple-watch-screen/3244/" target="_blank">coderclick.com</a>, <a href="https://minitipsx.com/" target="_blank">minitipsx.com</a>, <a href="https://outdoorkitsx.com/" target="_blank">outdoorkitsx.com.</a>  </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Managed a group of content writers and graphic designers.</p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Junior Project Manager</h3>
            <h3> <BsFillBagDashFill className='' /> suPPPort Ltd </h3>
            <h3>Mar 2022 – Aug 2022 (Full time) </h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Managed project proposal, project report, project documentation </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Managed web content: <a href="https://suppport.org/fashion-revolution-week-2022-money-fashion-power/" target="_blank">suPPPort.org</a></p>
            </li>
            
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services