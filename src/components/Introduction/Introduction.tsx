import React from "react";
import "./Introduction.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCameraRetro, faEnvelope } from "@fortawesome/free-solid-svg-icons";
const Fade = require("react-reveal/Fade");

function Introduction() {
  return (
    <div className="intro d-flex" id="intro">
      <div></div>
      <div className="typewriter">
        <h1 className="mt-4">Yunus Gogce;</h1>
        <h1 className="mt-2">Software Engineer;</h1>
      </div>
      <div className="socials">
        <Fade delay={4000} bottom>
          <FontAwesomeIcon
            icon={faLinkedin}
            size="2x"
            className="m-2"
            fixedWidth
          />
        </Fade>
        <Fade delay={4100} bottom>
          <FontAwesomeIcon
            icon={faCameraRetro}
            size="2x"
            className="m-2"
            fixedWidth
          />
        </Fade>
        <Fade delay={4200} bottom>
          <FontAwesomeIcon
            icon={faEnvelope}
            size="2x"
            className="m-2"
            fixedWidth
          />
        </Fade>
      </div>
      <div>
        <AnchorLink href="#aboutme">
          <span className="material-icons text-white display-4 mb-4">
            keyboard_double_arrow_down
          </span>
        </AnchorLink>
      </div>
    </div>
  );
}

export default Introduction;
