'use client'
export type Project = {
  id: number
  image: string
  title: string
  desc: string
  url: string
  creator: string
}

interface Props {
  project: Project
}

import Image from 'next/image'

export default function ProjectCard ({ project }: Props) {
  return (
    <div
      data-aos='fade-up'
      data-aos-delay='300'
      className='bg-black m-0 p-0 border border-[#121212] rounded-lg w-[300px] h-[250px] overflow-hidden text-white card'
    >
      <div className='relative w-full h-full'>
        <Image
          src={project.image}
          alt={project.title}
          width={300}
          height={250}
          className='rounded-lg w-full h-full object-cover'
        />
        <button className='top-2 right-2 absolute bg-black p-2 rounded-lg text-white btn btn-primary'>
          <a href={project.url} target='_blank'>Visit Site</a>
        </button>
      </div>
    </div>
  )
}
