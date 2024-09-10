import Image from 'next/image'
import React from 'react'
import project1 from '@/app/public/images/p1.jpg'
import project2 from '@/app/public/images/p2.jpg'
import project3 from '@/app/public/images/p3.jpg'
import project4 from '@/app/public/images/p4.jpg'
import project5 from '@/app/public/images/p5.jpg'
import project6 from '@/app/public/images/p2.jpg'

const Projects = () => {
  return (
    <div className='bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]'>
        <h1 className='heading'>
            Pro<span className='text-yellow-400'>ject</span>
        </h1>
      <div className='w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]'>
        <div data-aos='fade-up'>
            <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                <Image 
                src={project1}
                alt='project'
                layout='fill'
                className='object-contain'
                />
            </div>
        </div>
        <div data-aos='fade-up' data-aos-delay='300'> 
            <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                <Image 
                src={project2}
                alt='project'
                layout='fill'
                className='object-contain'
                />
            </div>
        </div>
        <div data-aos='fade-up' data-aos-delay='600'>
            <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                <Image 
                src={project3}
                alt='project'
                layout='fill'
                className='object-contain'
                />
            </div>
        </div>
        <div data-aos='fade-up' data-aos-delay='900'>
            <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                <Image 
                src={project4}
                alt='project'
                layout='fill'
                className='object-contain'
                />
            </div>
        </div>
        <div data-aos='fade-up' data-aos-delay='1200'>
            <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                <Image 
                src={project5}
                alt='project'
                layout='fill'
                className='object-contain'
                />
            </div>
        </div>
        <div data-aos='fade-up' data-aos-delay='1600'> 
            <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                <Image 
                src={project6}
                alt='project'
                layout='fill'
                className='object-contain'
                />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
