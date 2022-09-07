import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faEnvelope,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          {/* <FontAwesomeIcon icon={faHome} color="#ffff" /> */}
          <h2>HOME</h2>
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          {/* <FontAwesomeIcon icon={faUser} color="#ffff" /> */}
          <h2>ABOUT</h2>
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="projects-link"
          to="/projects"
        >
          {/* <FontAwesomeIcon icon={faCode} color="#ffff" /> */}
          <h2>PROJECTS</h2>
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          {/* <FontAwesomeIcon icon={faEnvelope} color="#ffff" /> */}
          <h2>CONTACTS</h2>
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
