import type { Project } from './ProjectCard'

interface Props {
  project: Project
  onClose: () => void
}
// this component is the modal that pops up when user clicks see more on the project card
export default function ProjectModal ({ project, onClose }: Props) {
  return (
    <div className='text-white modal' tabIndex={-1} style={{ display: 'block' }}>
      <div className='mt-10 w-full h-full modal-dialog'>
        <div className='modal-content'>
        <button
              onClick={onClose}
              type='button'
              className='top-0 right-0 absolute bg-black m-2'
              data-bs-dismiss='modal'
            >
              Close
            </button>
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
