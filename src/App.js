import React from "react";
import { Switch, Route } from "react-router-dom";
import Resume from "./components/Resume";
import Experience from "./components/Experience";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Technologies from "./components/Technologies";
import Audio from "./components/Audio";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <a name="aboutme"></a>
      <AboutMe />

      <a name="resume"></a>
      <Resume />

      <a name="experience"></a>
      <Experience />

      <a name="portfolio"></a>
      <Portfolio />

      {/* <a name="technologies"></a>
      <Technologies /> */}

      <a name="audio"></a>
      <Audio />

      <a name="contact"></a>
      <Contact />
    </div>
  );
};

export default App;
