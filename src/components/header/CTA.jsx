import React from 'react'
import CV from '../../assets/NabilaCV.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Video Introduction</a>
    </div>
  )
}

export default CTA