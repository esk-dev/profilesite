import React, { useState, useEffect } from "react";
import ProjectComponent from "../ProjectComponent/ProjectComponent";
import AnimatedLetters from "../AnimatedLetters";
import "./Projects.scss";

function Projects() {
  const [letterClass, setLetterClass] = useState("text-animate");
  const ngforecast = {
    title: 'ngForecast',
    img: 'https://alvarotrigo.com/blog/assets/imgs/2021-10-16/lynn-fisher-web-developer-portfolio-example.webp',
    link: 'https://google.com',
    repository: 'https://github.com',
    text: 'Lorem lorem lorem lorem lorem Lorem lorem lorem lorem lorem Lorem lorem lorem lorem lorem Lorem lorem lorem lorem lorem Lorem lorem lorem lorem lorem',
    technologies: ['Angular', 'Material'],
  }
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 1000);
  }, []);
  return (
    <div className="container projects-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={`Мои проекты`}
            idx={1}
          />
        </h1>
        <ProjectComponent
          project={ngforecast}
        />
      </div>
    </div>
  );
}

export default Projects;
