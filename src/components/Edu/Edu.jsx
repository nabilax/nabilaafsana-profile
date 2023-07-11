import React from 'react'
import './edu.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Edu = () => {
  return (
    <section id='edu'>
      <h5>What Education Background I Have</h5>
      <h2>My Education</h2>
      
      <div className="container edu__container">
        <div className="edu__frontend">
          {/* <h3>Frontend Development</h3> */}
          <div className="edu__content">
            <article className='edu__details'>
              <BsPatchCheckFill className='edu__details-icon' />
              <div>
              <h4>Lithan Academy, Singapore</h4>
                <small className='text-light'>Applied Diploma Degree in Software Engineering</small>
                <div>
                <small className='text-light'>Sep 2022 - Sep 2023</small>
                </div>
              </div>
            </article>
    
          </div>
        </div>
        {/* END OF FRONTEND */}

        <div className="edu__backend">
        {/* <h3>Backend Development</h3> */}
          <div className="edu__content">
         
            <article className='edu__details'>
              <BsPatchCheckFill className='edu__details-icon' />
              <div>
                <h4>RUET, Bangladesh</h4>
                <small className='text-light'>BSc in Electrical and Electronic Engineering</small>
                <div>
                <small className='text-light'>Mar 2013 - Dec 2017</small>
                </div>
              </div>
            </article>
      
       
          </div>
        </div>
      </div>
    </section>
  )
}

export default Edu