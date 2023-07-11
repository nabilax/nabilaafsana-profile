import React from 'react'
import CV from '../../assets/NabilaAfsanaResume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="https://youtu.be/wgTbYVTJ_Os" className='btn btn-primary'>Video Introduction</a>
    </div>
  )
}

export default CTA