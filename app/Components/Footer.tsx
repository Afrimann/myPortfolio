import { DevicePhoneMobileIcon, EnvelopeIcon, MapIcon } from '@heroicons/react/16/solid'
import React from 'react'

const Footer = () => {
    return (
        <div id='footer' className='bg-[#02050a] pt-[8rem] pb-[4rem]'>
            <div className='gap-[3rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto pb-[6rem] border-gray-400 border-b-[1px] w-[80%]'>
                <div className='flex items-center space-x-6'>
                    <div className='flex justify-center items-center bg-[#55e6a5] rounded-full w-[5rem] md:w-[6.5rem] h-[5rem] md:h-[6.5rem]'>
                        <MapIcon className='w-[3.5rem] md:w-[4rem] h-[3.5rem] md:h-[4rem] text-black' />
                    </div>
                    <div className='mb-[0.2rem] font-semibold text-[25px] text-white'>
                        <h1>Address</h1>
                        <p className='opacity-60 w-[90%] text-[17px] text-white'>No 26, Orisunbare, Molete, Ibadan.</p>
                    </div>
                </div>
                <div className='flex items-center space-x-6'>
                    <div className='flex justify-center items-center bg-[#55e6a5] rounded-full w-[5rem] md:w-[6.5rem] h-[5rem] md:h-[6.5rem]'>
                        <DevicePhoneMobileIcon className='w-[3.5rem] md:w-[4rem] h-[3.5rem] md:h-[4rem] text-black' />
                    </div>
                    <div className='mb-[0.2rem] font-semibold text-[25px] text-white'>
                        <h1>Phone</h1>
                        <p className='opacity-60 w-[90%] text-[17px] text-white'>
                            +2348026526970 <br /> +2349133328567
                        </p>
                    </div>
                </div>
                <div className='flex items-center space-x-6 sm:space-x-3'>
                    <div className='flex justify-center items-center bg-[#55e6a5] rounded-full w-[5rem] md:w-[6.5rem] h-[5rem] md:h-[6.5rem]'>
                        <EnvelopeIcon className='w-[3.5rem] md:w-[4rem] h-[3.5rem] md:h-[4rem] text-black' />
                    </div>
                    <div className='mb-[0.2rem] font-semibold text-[25px] text-white'>
                        <h1>Email</h1>
                        <p className='opacity-60 w-[90%] text-[17px] text-white sm:text-[14px]'>
                            omotoshopeter737@gmail.com <br /> peteromotosho737@gmail.com
                        </p>
                    </div>
                </div>
                <div className='mx-auto mt-[2rem]'>
                <div className='opacity-20 mb-[2rem] md:mb-0 text-[18px] text-white capitalize'>
                    peter omoh 2025 | all rights reserved
                </div>

            </div>

            </div>
        </div>
    )
}

export default Footer
