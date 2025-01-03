export type Project = {
  id: number
  image: StaticImageData
  title: string
  desc: string
  url: string
  creator: string
}

interface Props {
  project: Project
  onSeeMore: (project: Project) => void
}

// this component is the structure of each project object mapped from the Array ProjectDetails in the Project component
import Image, { StaticImageData } from 'next/image'

export default function ProjectCard ({ project, onSeeMore }: Props) {
  return (
    <div data-aos = 'fade-up' data-aos-delay = '300' className='border-[#121212] bg-black m-0 p-0 border rounded-lg w-[300px] h-[250px] text-white card'>
      <div className='relative card-body'>
        <Image
          src={project.image}
          alt={project.title}
          width={300}
          height={200}
          className='rounded-lg object-contain'
        />
        <div className='flex flex-col items-center mid-content'>
          <h5 className='px-6 text-yellow-400 card-title'>{project.title}</h5>
          <p className='px-6'>Web Design</p>
        </div>
        <button
          onClick={() => onSeeMore(project)}
          className='top-0 right-0 absolute bg-black p-2 rounded-lg text-white btn btn-primary'
        >
          Visit Site
        </button>
      </div>
    </div>
  )
}
