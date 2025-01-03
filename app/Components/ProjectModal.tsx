import type { Project } from './ProjectCard'

interface Props {
  project: Project
  onClose: () => void
}
// this component is the modal that pops up when user clicks see more on the project card
export default function ProjectModal ({ project, onClose }: Props) {
  return (
    <div  className='text-white modal' tabIndex={-1} style={{ display: 'block' }}>
      <div className='mt-10 w-full h-full modal-dialog'>
        <div className='modal-content'>
        <div
              onClick={onClose}
              className='top-0 right-0 z-[1000000000] absolute m-2 w-[50px] h-[100px] text-black cursor-pointer'
            >
              {/* <XMarkIcon className=''/> */}
              &times;
            </div>
          <div className='modal-header'>
            <h5 className='text-black modal-title'>{project.title}</h5>
          </div>
          <div className='text-black modal-body'>
            <p>{project.desc}</p>
            <p>Creator: {project.creator}</p>
          </div>
          <div className='modal-footer'>
            <a href={project.url} className='btn btn-primary'>
              Go to project
            </a>
            
          </div>
        </div>
      </div>
    </div>
  )
}
