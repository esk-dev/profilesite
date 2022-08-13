import React from "react";
import "./Projects.scss";
import Project1 from "../../assets/project1.png";

function Projects() {
  return (
    <div className="container projects-page">
      <div className="text-zone">
        <h1>Мои проекты</h1>
        <div className="projects-container">
          <div className="project-card">
            <h2>Project 1</h2>
            <div className="image-card project1">
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
