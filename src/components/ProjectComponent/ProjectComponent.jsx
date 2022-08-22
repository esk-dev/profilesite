import React from "react";
import "./ProjectComponent.scss";
export default function ProjectComponent(props) {
  // const content = (
  //   <ul>
  //     {props.tech.map((tech) =>
  //       <li key={tech.id}>{tech.text}</li>
  //     )}
  //   </ul>
  // );
  return (
    <div className="project-card">
      <div className="image-box">
        <a href={props.link}>
          <img src={props.screen} alt="Project-home-page" />
        </a>
      </div>
      <div className="content-box">
        <div className="content">
          <h4>Pet-project</h4>
          <h2>{props.title}</h2>
          <div className="text-box">
            <p>{props.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
