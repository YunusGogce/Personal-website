import React, { useState } from "react";
import "./Projects.css";
import IProject from "./IProject";
import projectsData from "./projects.json";

function Projects() {
  const [projects] = useState<Array<IProject>>(projectsData.projects);

  return (
    <div className="projects text-light" id="projects">
      <div className="projects-bg">
        <h2 className="h1 mb-5 hr">{"<Projects />"}</h2>
        {projects.map((project, i) => {
          return (
            <div key={i} className="project-card p-4 mb-4">
              <p className="h4">{project.title}</p>
              <hr />
              <p>{project.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;