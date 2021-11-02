import React, { useEffect, useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Introduction from "./components/Introduction/Introduction";
import projectsData from "./components/Projects/projects.json";
import IProject from "./components/Projects/IProject";

function App() {
  const [projects] = useState<Array<IProject>>(projectsData.projects);

  return (
    <>
      <Navigation />
      <div className="content">
        <Introduction />
        <div className="projects text-light" id="projects">
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
    </>
  );
}

export default App;
