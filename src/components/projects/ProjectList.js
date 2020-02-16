import React from 'react'

import ProjectSummary from './ProjectSummary'

const ProjectList = ({projects}) =>{
    return (
        <div className="list section">
        {/* only if projects exist do the map thing */}
          { projects && projects.map(project=>{
            return (
                <ProjectSummary project={project} key={project.id} />
            )
          })}
        </div>
    )
}

export default ProjectList