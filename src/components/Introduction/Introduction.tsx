import React, { useState } from "react";
import "./Introduction.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Toast } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCameraRetro, faEnvelope } from "@fortawesome/free-solid-svg-icons";
const Fade = require("react-reveal/Fade");

function Introduction() {
  const [showA, setShowA] = useState(true);
  return (
    <>
      <Fade left>
        <Toast
          show={showA}
          onClose={() => setShowA(!showA)}
          bg="secondary"
          className="maintenance-toast"
        >
          <Toast.Header>
            <strong className="me-auto">Website under maintenance</strong>
          </Toast.Header>
          <Toast.Body>
            Hi there! Welcome on my portfolio website. I'm currently still
            working on it, but feel free to have a look :)
          </Toast.Body>
        </Toast>
      </Fade>
      <div className="intro d-flex" id="intro">
        <div></div>
        <div className="typewriter">
          <h1 className="mt-4">Yunus Gogce;</h1>
          <h1 className="mt-2">Software Engineer;</h1>
        </div>
        <div className="socials">
          <Fade delay={4000} bottom>
            <a
              href="https://www.linkedin.com/in/yunus-gogce/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                className="m-2"
                fixedWidth
              />
            </a>
          </Fade>
          <Fade delay={4100} bottom>
            <a
              href="https://unsplash.com/@yunusg"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faCameraRetro}
                size="2x"
                className="m-2"
                fixedWidth
              />
            </a>
          </Fade>
          <Fade delay={4200} bottom>
            <AnchorLink href="#contact">
              <FontAwesomeIcon
                icon={faEnvelope}
                size="2x"
                className="m-2"
                fixedWidth
              />
            </AnchorLink>
          </Fade>
        </div>
        <div>
          <Fade delay={5000}>
            <AnchorLink href="#aboutme">
              <span className="material-icons text-white display-4 mb-5">
                keyboard_double_arrow_down
              </span>
            </AnchorLink>
          </Fade>
        </div>
      </div>
    </>
  );
}

export default Introduction;
