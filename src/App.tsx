import React from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Introduction from "./components/Introduction/Introduction";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <>
      <Navigation />
      <div className="content">
        <Introduction />
        <Projects />
      </div>
    </>
  );
}

export default App;
