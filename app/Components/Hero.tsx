import React from 'react'
import Particle from './Particle'
import TextEffect from './TextEffect'
import Image from 'next/image'
import user from '@/app/public/images/u1.jpg'
import hero from '@/app/public/images/banner.jpg'
import { ArrowUpTrayIcon, PlayCircleIcon } from '@heroicons/react/16/solid'

const Hero = () => {
    return (
        <div
            className="h-[88vh] hero bg-black mt-[10vh]"
            style={{ backgroundImage: `url(${hero.src})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center center' }}>
            <Particle />
            <div className='w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center'>
                <div>
                    <h1 className='text-[35px] md:text-[50px] text-white font-bold '>
                        HI, I&apos;M <span className='text-yellow-400'>PETER!</span>
                    </h1>
                    <TextEffect />
                    <p className='text-[16px] mt-[2rem] text-[#ffffff92]'>
                        I am a Frontend Developer driven with the passion of developing and implementing projects that meets the actual benefits of technology which is solely to make life easier to navigate. Welcome to my portfolio and feel free to check my projects.
                    </p>
                    <div className='mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6'>
                        <button className='px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2'>
                            <p>Download CV</p>
                            <ArrowUpTrayIcon className='w-[1.6rem] h-[1.7rem] text-black ' />
                        </button>
                        <button className='flex items-center space-x-2 '>
                            <PlayCircleIcon className='w-[4rem] h-[4rem] hover:text-yellow-400 transition-all duration-200 text-[#55e6a5] ' />
                            <p className='text-[20px] font-semibold text-white '>Watch the Video</p>
                        </button>
                    </div>
                </div>
                <div className='w-[500px] hidden bg-[#55e6a5] relative lg:flex  items-center rounded-full h-[500px]'>
                    {/* Image of User */}
                    <Image src={user} alt='user' className='object-cover rounded-full' />
                </div>
            </div>
        </div>
    )
}

export default Hero
