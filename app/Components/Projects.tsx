import React, { useEffect, useState } from 'react'
import { ProjectDetails } from '../constants'
import ProjectCard from './ProjectCard'
import type { Project } from './ProjectCard'
import ProjectModal from './ProjectModal'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleSeeMore = (project: Project) => {
    setSelectedProject(project)
  }
  const handleCloseModal = () => {
    setSelectedProject(null)
  }

  // Disable scrolling when the modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    } // Cleanup on component unmount
  }, [isModalOpen])

  return (
    <div className='flex flex-col justify-center items-center bg-[#09101a] mx-auto p-4 w-full min-h-[100vh] b'>
        <h1 className='mb-4 heading'>My <span className='text-yellow-400'>PROJECTS</span></h1>
      <div className='gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {ProjectDetails.map((project, index) => (
          <div key={index} className='m-0 p-0'>
            <ProjectCard
              key={index}
              project={project}
              onSeeMore={handleSeeMore}
            />
          </div>
        ))}
      </div>
      {selectedProject && (
        <ProjectModal onClose={handleCloseModal} project={selectedProject} />
      )}
    </div>
  )
}

export default Projects
