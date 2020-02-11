import React from 'react'

import ProjectSummary from './ProjectSummary'

const ProjectList = () =>{
    return (
        <div className="list section">
           <ProjectSummary/>
           <ProjectSummary/>
           <ProjectSummary/>
           <ProjectSummary/>
        </div>
    )
}

export default ProjectList