import React, { useState } from 'react'
import { ProjectDetails } from '../constants'
import ProjectCard from './ProjectCard'
import type { Project } from './ProjectCard'
import ProjectModal from './ProjectModal'

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)
    const  handleSeeMore = (project: Project) => {
        setSelectedProject(project)
    }
    const handleCloseModal =  () => {
        setSelectedProject(null)
    }
  return (
    <div>
        {ProjectDetails.map((project,index)=> (
            <ProjectCard 
            key={index}
                project={project}
                onSeeMore={handleSeeMore}
            />
        ))}
        {selectedProject && <ProjectModal
            onClose={handleCloseModal}
            project={selectedProject}
        />}
    </div>
  )
}

export default Projects