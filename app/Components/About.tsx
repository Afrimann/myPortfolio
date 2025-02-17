import { ArrowUpTrayIcon } from '@heroicons/react/16/solid'
import React from 'react'
import about from '@/app/public/images/about.jpg'
import Image from 'next/image'

const About = () => {
    return (
        <div id='about' className='bg-[#121121] pt-[4rem] md:pt-[8rem] pb-[3rem]'>
            <div className='items-center gap-[3rem] grid grid-cols-1 md:grid-cols-2 mx-auto w-[80%]'>
                <div className=''>
                    <h1 className='mb-[1rem] font-bold text-[#55e6a5] text-[20px] uppercase'>ABOUT ME</h1>
                    <h2 className='mb-[3rem] font-bold text-[25px] text-white md:text-[35px] lg:text-[45px] capitalize leading-[2rem] md:leading-[3rem]'>
                        Transforming <span className='text-yellow-400'>Visions</span>
                    </h2>
                    <div className='flex items-center md:space-x-10 mb-[3rem]'>
                        <span className='hidden md:block bg-slate-400 rounded-sm w-[100px] h-[5px]'></span>
                        <p className='w-[80%] text-[17px] text-slate-300'>
                            My main aim is receiving or bringing about great ideas and transforming those ideas into reality. The climax or succesful phase of innovation is when it reaches and concludes its implementation phase.
                        </p>
                    </div>
                    <button className='flex items-center space-x-2 bg-[#55e6a5] hover:bg-yellow-400 px-[2rem] py-[1rem] font-bold text-[18px] text-black uppercase transition-all duration-200'>
                        <p>Download CV</p>
                        <ArrowUpTrayIcon className='w-[1.6rem] h-[1.7rem] text-black' />
                    </button>
                </div>
                <div data-aos='fade-left' className='relative mx-auto md:mx-0 mt-[2rem] lg:mt-0 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px]'>
                    <Image
                        src='/about.jpg'
                        alt='user'
                        layout='fill'
                        objectFit='contain'
                        className='z-[11] relative w-[100%] h-[100%] object-contain'
                    />
                    <div className='top-[-2rem] right-[-2rem] z-[10] absolute bg-[#55e6a5] w-[100%] h-[100%]'></div>
                </div>
            </div>
        </div>
    )
}

export default About
