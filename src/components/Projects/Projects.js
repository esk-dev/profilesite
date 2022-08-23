import React, { useState, useEffect } from "react";
import ProjectComponent from "../ProjectComponent/ProjectComponent";
import AnimatedLetters from "../AnimatedLetters";
import "./Projects.scss";
// import project1 from "../../assets/project1.png";

function Projects() {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 1500);
  }, []);
  return (
    <div className="container projects-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={`Мои проекты`}
            idx={5}
          />
        </h1>
        <ProjectComponent
          title={"ngForecast"}
          screen={'https://alvarotrigo.com/blog/assets/imgs/2021-10-16/lynn-fisher-web-developer-portfolio-example.webp'}
          link={"https://google.com"}
          text={"Lorem lorem lorem lorem lorem Lorem lorem lorem lorem lorem Lorem lorem lorem lorem lorem Lorem lorem lorem lorem lorem Lorem lorem lorem lorem lorem"}
          tech={[
            {'id': 0, 'text': 'Angular'},
            {'id': 1, 'text': 'RxJs'}
          ]}
        />
        <ProjectComponent
          title={"Title"}
          screen={'https://alvarotrigo.com/blog/assets/imgs/2021-10-16/lynn-fisher-web-developer-portfolio-example.webp'}
          link={"https://google.com"}
          text={"Lorem lorem lorem lorem lorem Lorem lorem lorem lorem lorem Lorem m lorem Lorem lorem lorem lorem lorem Lorem lorem lorem lorem lorem"}
        />
        <ProjectComponent
          title={"Title"}
          screen={'https://alvarotrigo.com/blog/assets/imgs/2021-10-16/lynn-fisher-web-developer-portfolio-example.webp'}
          link={"https://google.com"}
          text={"Lorem lorem lorem lorem lorem Lorem lorem lorem lorem lorem Lorem m lorem Lorem lorem lorem lorem lorem Lorem lorem lorem lorem lorem"}
        />
      </div>
    </div>
  );
}

export default Projects;
