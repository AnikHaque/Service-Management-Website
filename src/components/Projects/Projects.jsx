import React from 'react'
import Services from '../Services/Services'
import { ProjectsReview } from '../Services/ProjectsReview'
import { Audience } from './Audience'

export const Projects = () => {
  return (
    <div>
        <Services></Services>
        <br></br>
        <br></br>
        <br></br>
        <Audience></Audience>
          <br></br>
          <br></br>
          <br></br>
        <ProjectsReview></ProjectsReview>
    </div>
  )
}
