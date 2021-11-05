import React from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Introduction from "./components/Introduction/Introduction";
import Projects from "./components/Projects/Projects";
import AboutMe from "./components/AboutMe/AboutMe";
import Work from "./components/Work/Work";

function App() {
  return (
    <>
      <Navigation />
      <div className="content">
        <Introduction />
        <AboutMe />
        <Projects />
        <Work />
      </div>
    </>
  );
}

export default App;
