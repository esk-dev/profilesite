import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import Resume from "./../../assets/resume.pdf";
import "./Sidebar.scss";
export default function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
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
        <li>
          <a className="resume" href={Resume} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFilePdf} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </aside>
  );
}
