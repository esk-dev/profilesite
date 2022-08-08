import React from 'react'
import './Projects.scss'
import Project1 from '../../assets/project1.png'

function Projects() {
  return (
    <div className="container projects-page">
      <div className="text-zone">
        <h1>List of projects</h1>
        <div className="projects-container">
          <div className="project-card">
            <h2>Project 1</h2>
            <div className="image-card project1">
              <img src={Project1} alt="Project 1" />
            </div>
          </div>
          <div className="project-card">
            <h2>Project 1</h2>
            <div className="image-card project2">
              <img src={Project1} alt="Project 1" />
            </div>
          </div>
          <div className="project-card">
            <h2>Project 1</h2>
            <div className="image-card project2">
              <img src={Project1} alt="Project 1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;
