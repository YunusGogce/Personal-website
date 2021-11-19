import React from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Introduction from "./components/Introduction/Introduction";
import Projects from "./components/Projects/Projects";
import AboutMe from "./components/AboutMe/AboutMe";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Navigation />
      <div className="content">
        <Introduction />
        <AboutMe />
        <Projects />
        <Work />
        <Contact />
      </div>
    </>
  );
}

export default App;
