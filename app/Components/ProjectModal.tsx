import type { Project } from "./ProjectCard"

interface Props{
    project: Project
    onClose: () => void
}

export default function ProjectModal({project,onClose}:Props){
    return(
        <div className="modal" tabIndex={-1} style={{display: 'block'}}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{project.title}</h5>
                        <button onClick={onClose} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>{project.desc}</p>
                        <p>Creator: {project.creator}</p>
                    </div>
                    <div className="modal-footer">
                        <a href={project.url} className="btn btn-primary">Go to project</a>
                        <button onClick={onClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}