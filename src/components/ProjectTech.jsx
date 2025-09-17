import React from 'react'

function ProjectTech(props) {
  return (
        <img className="h-5 xl:h-6 mb-1 object-cover" src={`skill-icons/${props.name.toLowerCase()}.png`}/>
  )
}

export default ProjectTech