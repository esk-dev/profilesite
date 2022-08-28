import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faEnvelope,
  faCode
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faGoogle
} from "@fortawesome/free-brands-svg-icons";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#ffff" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#ffff" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="projects-link"
          to="/projects"
        >
          <FontAwesomeIcon icon={faCode} color="#ffff" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#ffff" />
        </NavLink>
        {/* <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://ru.linkedin.com/"
              className="linkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/esk98"
              className="github"
            >
              <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://google.com/"
              className="google"
            >
              <FontAwesomeIcon icon={faGoogle} color="#4d4d4e" />
            </a>
          </li>
        </ul> */}
      </nav>
    </div>
  );
};

export default Navbar;
