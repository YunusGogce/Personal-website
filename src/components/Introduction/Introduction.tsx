import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Introduction.css";

function Introduction() {
  return (
    <div className="intro">
      <div></div>
      <div className="typewriter">
        <h1 className="mt-4">Yunus Gogce.</h1>
      </div>
      <div>
        <AnchorLink href="#projects">
          <span className="material-icons text-white display-4 mb-4">
            keyboard_double_arrow_down
          </span>
        </AnchorLink>
      </div>
    </div>
  );
}

export default Introduction;
