import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
import Resume from "./components/Resume";
import Experience from "./components/Experience";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Technologies from "./components/Technologies";
import Audio from "./components/Audio";
import Contact from "./components/Contact";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid">
        <section id="aboutme" className="mb-5">
          <h2 id="aboutme">About Me</h2>
          <a name="aboutme"></a>
          <AboutMe />
        </section>
        <section id="resume" className="mb-5">
          <h2 id="resume">Resume</h2>
          <a name="resume"></a>

          <Resume />
        </section>
        <section id="experience" className="mb-5">
          <h2 id="experience">Experience</h2>
          <a name="experience"></a>
          <Experience />
        </section>
        <section id="portfolio" className="mb-5">
          <h2 id="portfolio">Portfolio</h2>
          <a name="portfolio"></a>
          <Portfolio />
        </section>
        {/* <a name="technologies"></a>
      <Technologies /> */}
        {/* <section className="mb-5">
          <a name="audio"></a>
          <Audio />
        </section> */}
        <section id="contact" className="mb-5">
          <h2 id="contact">Contact</h2>
          <a name="contact"></a>
          <Contact />
        </section>

        <ToastContainer />
      </div>
    );
  }
}
