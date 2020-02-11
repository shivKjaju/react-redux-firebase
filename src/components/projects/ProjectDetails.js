import React from 'react'

const ProjectDetails = (props) => {
    const projectId = props.match.params.id
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
               <div className="card-content">
                    <span className="card-title">Project Id is  - {projectId}</span>
                    <p>There you go</p>
               </div>
               <div className="card-action grey lighten-4 grey-text">
                   <div>Posted by PSJ</div>
                   <div>9th February, 9:45pm</div>
               </div>
            </div>
        </div>
    )
}

export default ProjectDetails 