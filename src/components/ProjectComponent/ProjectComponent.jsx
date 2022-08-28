import React from "react";
import "./ProjectComponent.scss";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function ProjectComponent(props) {
  const technologies = props.project?.technologies;
  const listtechnologies = technologies?.map((el) => <li key={el}>{el}</li>);

  return (
    <div className="project-card">
      <div className="image-box">
        <a href={props.project?.link}>
          <img src={props.project?.img} alt="Project-home-page" />
        </a>
      </div>
      <div className="content-box">
        <div className="content">
          <h4>Pet-project</h4>
          <h2>{props.project?.title}</h2>
          <div className="text-box">
            <p>{props.project?.text}</p>
          </div>
          <ul>{listtechnologies}</ul>
          <ul>
            <li>
              <a className="link-icon" href={props.project?.repository}>
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a className="link-icon" href={props.project?.link}>
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
