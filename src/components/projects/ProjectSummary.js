import React from 'react'

const ProjectSummary = ({project}) => {
    return (
        <div className="card z-depth-0 summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{project.title}</span>
                    <p>Posted By {project.authorFirstName} {project.authorLastName}</p>
                    <p className="grey-text"> 9th Febraury</p>
                </div>
            </div>
    )
}

export default ProjectSummary