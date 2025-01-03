export type Project = {
    id: number,
    title: string,
    desc: string,
    url: string,

    creator: string
}

interface Props{
    project: Project
    onSeeMore: (project: Project) => void
}

export default function ProjectCard({project,onSeeMore}:Props){
    return(
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.desc}</p>
                <a href={project.url} className="btn btn-primary">Go to project</a>
                <button onClick={()=>onSeeMore(project)} className="btn btn-primary">See more</button>
            </div>
        </div>
    )

}