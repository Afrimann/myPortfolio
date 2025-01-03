import { CodeBracketSquareIcon, CommandLineIcon, RocketLaunchIcon } from '@heroicons/react/16/solid'
import React from 'react'

const Services = () => {
    return (
        <div className='bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]'>
            <p className='heading'>My <span className='text-yellow-400'>Services</span></p>
            <div className='items-center gap-[3rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto mt-[4rem] w-[80%] text-white'>
                <div data-aos='fade-right'>
                    <div className='bg-red-700 p-[2rem] font-semibold text-center uppercase transform transition-all duration-300 hover:scale-110 hover:-rotate-6'>
                        <CodeBracketSquareIcon className='mx-auto w-[6rem] h-[6rem] text-[#d3fae8]' />
                        <h1 className='mt-[1.5rem] mb-[1.5rem] text-[20px] md:text-[30px]'>
                            Frontend
                        </h1>
                        <p className='font-normal text-[#d3d2d2] text-[14px]'>
                            Proficient in ReactJs, NextJs, TypeScript,Tailwind for seamless user experiences.                        </p>
                    </div>
                </div>
                <div data-aos='fade-right' data-aos-delay='300'>
                    <div className='bg-orange-700 p-[2rem] font-semibold text-center uppercase transform transition-all duration-300 hover:scale-110'>
                        <RocketLaunchIcon className='mx-auto w-[6rem] h-[6rem] text-[#d3fae8]' />
                        <h1 className='mt-[1.5rem] mb-[1.5rem] text-[20px] md:text-[30px]'>
                            APIs
                        </h1>
                        <p className='font-normal text-[#d3d2d2] text-[14px]'>
                            I integrate APIs to enable smooth data flow between systems. Skilled in connecting, managing, and optimizing APIs for seamless functionality and efficiency.                        </p>
                    </div>
                </div>
                <div data-aos='fade-left' data-aos-delay='500'>
                    <div className='bg-blue-700 p-[2rem] font-semibold text-center uppercase transform transition-all duration-300 hover:scale-110 hover:rotate-6'>
                        <CommandLineIcon className='mx-auto w-[6rem] h-[6rem] text-[#d3fae8]' />
                        <h1 className='mt-[1.5rem] mb-[1.5rem] text-[20px] md:text-[30px]'>
                            team work
                        </h1>
                        <p className='font-normal text-[#d3d2d2] text-[14px]'>
                            I excel in teamwork and problem-solving, collaborating with diverse teams to address challenges and implement effective solutions.                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
