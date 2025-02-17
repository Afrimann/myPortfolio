import React from 'react'
import Particle from './Particle'
import TextEffect from './TextEffect'
import Image from 'next/image'
import hero from '@/public/banner.jpg'
import { ArrowUpTrayIcon } from '@heroicons/react/16/solid'

const Hero = () => {
    return (
        <div id='home'
            className="bg-black mt-[10vh] h-[88vh] hero"
            style={{ backgroundImage: `url(${hero.src})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center center' }}>
            <Particle />
            <div className='items-center gap-[3rem] grid grid-cols-1 lg:grid-cols-2 mx-auto w-[80%] h-[100%]'>
                <div>
                    <h1 className='font-bold text-[35px] text-white md:text-[50px]'>
                        HI, I&apos;M <span className='text-yellow-400'>PETER!</span>
                    </h1>
                    <TextEffect />
                    <p className='mt-[2rem] text-[#ffffff92] text-[16px]'>
                        I am a Frontend Developer driven with the passion of developing and implementing projects that meets the actual benefits of technology which is solely to make life easier to navigate. Welcome to my portfolio and feel free to check my projects.
                    </p>
                    <div className='sm:flex sm:flex-row flex-col items-center sm:space-x-6 space-y-6 sm:space-y-0 mt-[2rem]'>
                        <button className='flex items-center space-x-2 bg-[#55e6a5] hover:bg-yellow-400 px-[2rem] py-[1rem] font-bold text-[18px] text-black uppercase transition-all duration-200'>
                            <a
                            href='/Omotosho Peter CV.pdf'
                                download='/Omotosho Peter CV.pdf'

                            >Download CV</a>
                            <ArrowUpTrayIcon className='w-[1.6rem] h-[1.7rem] text-black' />
                        </button>
                        {/* <button className='flex items-center space-x-2'>
                            <PlayCircleIcon className='w-[4rem] h-[4rem] text-[#55e6a5] hover:text-yellow-400 transition-all duration-200' />
                            <p className='font-semibold text-[20px] text-white'>Watch the Video</p>
                        </button> */}
                    </div>
                </div>
                <div className='hidden relative lg:flex items-center bg-[#55e6a5] rounded-full w-[500px] h-[500px]'>
                    {/* Image of User */}
                    <Image src='/u1.jpg' alt='user' className='rounded-full object-cover' width={500} height={500}  />
                </div>
            </div>
        </div>
    )
}

export default Hero
