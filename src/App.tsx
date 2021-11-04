import React from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Introduction from "./components/Introduction/Introduction";
import Projects from "./components/Projects/Projects";
import AboutMe from "./components/AboutMe/AboutMe";

function App() {
  return (
    <>
      <Navigation />
      <div className="content">
        <Introduction />
        <AboutMe />
        <Projects />
      </div>
    </>
  );
}

export default App;
