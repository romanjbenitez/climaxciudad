import React from "react";
import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer>
      <div id="github">
        <a href="https://github.com/romanjbenitez">
          <FontAwesomeIcon icon={faGithubSquare} />
        </a>
      </div>
      <div>
        <a href='https://Romanbenites.com'>Romanbenites.com</a>
      </div>
    </footer>
  );
};
export default Footer;
