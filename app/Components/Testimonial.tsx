import React from 'react'
import TestimonialSlider from './TestimonialSlider'

const Testimonial = () => {
  return (
    <div id='testimonial' className='bg-[#02050a] pt-[4rem] mf:pt-[8rem] pb-[1rem]'>
      <h1 className='heading'>
        Client <span className='text-yellow-400'>Review</span>
      </h1>
      <div className='mx-auto pt-[5rem] pb-[4rem] w-[90%] md:w-[80%]'>
        <TestimonialSlider/>
      </div>
    </div>
  )
}

export default Testimonial
