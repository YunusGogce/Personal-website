import React, { useState } from "react";
import "./Projects.css";
import IProject from "./IProject";
import projectsData from "./projects.json";
const Fade = require("react-reveal/Fade");

function Projects() {
  const [projects] = useState<Array<IProject>>(projectsData.projects);

  return (
    <div className="projects text-light" id="projects">
      <div className="projects-bg">
        <h2 className="h1 mb-5 hr mt-5 mt-md-0">{"<Projects />"}</h2>
        <Fade>
          {projects.map((project, i) => {
            return (
              <div key={i} className="project-card p-4 mb-4">
                <p className="h4">{`${project.title} - ${project.year}`}</p>
                <hr />
                <p>{project.description}</p>
              </div>
            );
          })}
        </Fade>
      </div>
    </div>
  );
}

export default Projects;
