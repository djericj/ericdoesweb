import React from "react";
import "./App.scss";
import Resume from "./components/Resume";
import Experience from "./components/Experience";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Technologies from "./components/Technologies";
import Audio from "./components/Audio";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="container-fluid">
      {/* <a name="aboutme"></a>
      <section class="dark">
        <AboutMe />
      </section> */}
      <section className="mb-5">
        <a name="resume"></a>
        <h2>Resume</h2>
        <Resume />
      </section>
      <section className="mb-5">
        <h2>Experience</h2>
        <a name="experience"></a>
        <Experience />
      </section>
      <section className="mb-5">
        <a name="portfolio"></a>
        <Portfolio />
      </section>
      {/* <a name="technologies"></a>
      <Technologies /> */}
      <section className="mb-5">
        <a name="audio"></a>
        <Audio />
      </section>
      <section className="mb-5">
        <a name="contact"></a>
        <Contact />
      </section>
    </div>
  );
};

export default App;
