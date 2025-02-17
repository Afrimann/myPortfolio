import { StarIcon } from '@heroicons/react/16/solid'
import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface Props {
    name: string,
    image: string,
    role: string,
    review: string
}
const ClientReview = ({ name, image, role,review }: Props) => {
    return (
        <div className='flex flex-col justify-center text-center'>
            {/* <Image src={image}
                alt={name}
                width={100}
                height={100}
                objectFit='contain'
                className='mx-auto mb-[2rem] rounded-full'
            /> */}
            <h1 className='mt-[1rem] text-[25px] text-white'>{name}</h1>
            <p className='opacity-75 mt-[0.5rem] mb-[1.4rem] text-[18px] text-white'>{role}</p>
            <p className='opacity-50 mx-auto w-[90%] md:w-[50%] text-[16px] text-white'>
                {review}
            </p>

            <div className='flex items-center mx-auto'>
                <StarIcon className='w-[2rem] h-[2rem] text-yellow-400' />
                <StarIcon className='w-[2rem] h-[2rem] text-yellow-400' />
                <StarIcon className='w-[2rem] h-[2rem] text-yellow-400' />
                <StarIcon className='w-[2rem] h-[2rem] text-yellow-400' />
                <StarIcon className='w-[2rem] h-[2rem] text-yellow-400' />
            </div>
        </div>
    )
}

export default ClientReview
