import React from 'react'

interface Props{
    title: string,
    year: string
}
const SkillsItem = ({title,year}:Props) => {
  return (
    <div className='mb-[4rem] mD:mb-[8rem]'>
      <span data-aos='fade-up' className='px-[2rem] text-[#55e6a5] py-[0.9rem] font-bold text-[18px] border-[2px] border-[#55e6a5] '>{year}</span>
      <h1 data-aos='fade-up' data-aos-delay='300' className='mt-[2rem] font-semibold capitalize mb-[1rem] text-[20px] sm:text-[25px] md:Text-[30px] text-white '>{title}</h1>
      <p data-aos='fade-up' data-aos-delay='300' className='text-[#aaaaaa] font-normal w-[80%] text-[17px] opacity-80'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate earum sapiente tempora veritatis, accusantium dicta blanditiis, odit ducimus omnis neque quis cumque sit hic praesentium doloribus temporibus odio delectus tenetur.
      </p>
    </div>
  )
}

export default SkillsItem
