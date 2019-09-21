import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./App.scss";
import Experience from "./components/Experience";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import ProfessionalSummary from "./components/ProfessionalSummary";
import TechnicalSkills from "./components/TechnicalSkills";

const classes = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2)
  },
  control: {
    padding: theme.spacing(2)
  },
  chip: {
    margin: theme.spacing(0.5)
  },
  button: {
    flexGrow: 1,
    margin: 15
  }
}));

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid">
        <section id="aboutme" className="">
          <span className="icon float-right">
            <i className="fa fa-commenting fa-3x"></i>
          </span>
          <h2 id="aboutme">25 years of development, since 1995.</h2>

          <a name="aboutme"></a>
          <AboutMe classes={classes} />
        </section>
        <hr className="border border-light" style={{ opacity: "0.1" }} />
        <section id="professional-summary" className="pt-5">
          <span className="icon float-right">
            <i className="fa fa-book fa-3x"></i>
          </span>
          <h2 id="professional-summary" className="pb-5">
            Professional summary
          </h2>
          <a name="professional-summary"></a>

          <ProfessionalSummary classes={classes} />
        </section>
        <hr className="border border-light" style={{ opacity: "0.1" }} />
        <section id="technical-skills" className="pt-5">
          <span className="icon float-right">
            <i className="fa fa-laptop fa-3x"></i>
          </span>
          <h2 id="technical-skills" className="pb-5">
            Technical skills
          </h2>
          <a name="technical-skills"></a>

          <TechnicalSkills classes={classes} />
        </section>
        <hr className="border border-light" style={{ opacity: "0.1" }} />
        {/* <section id="resume" className="mb-5">
          <h2 id="resume">Resume</h2>
          <a name="resume"></a>

          <Resume />
        </section>
        <hr class="border border-light" style={{ opacity: "0.1" }} /> */}
        <section id="experience" className="pt-5">
          <span className="icon float-right">
            <i className="fa fa-file-text fa-3x"></i>
          </span>
          <h2 id="experience" className="pb-5">
            Experience
          </h2>
          <a name="experience"></a>
          <Experience classes={classes} />
        </section>
        <hr className="border border-light" style={{ opacity: "0.1" }} />
        <section id="portfolio" className="pt-5">
          <span className="icon float-right">
            <i className="fa fa-folder-open fa-3x"></i>
          </span>
          <h2 id="portfolio" className="pb-5">
            Portfolio
          </h2>
          <a name="portfolio"></a>
          <Portfolio classes={classes} />
        </section>
        <hr className="border border-light" style={{ opacity: "0.1" }} />
        {/* <a name="technologies"></a>
      <Technologies /> */}
        {/* <section className="mb-5">
          <a name="audio"></a>
          <Audio />
        </section> */}
        <section id="contact" className="pt-5">
          <span className="icon float-right">
            <i className="fa fa-envelope fa-3x"></i>
          </span>
          <h2 id="contact" className="pb-5">
            Contact me
          </h2>
          <a name="contact"></a>
          <Contact classes={classes} />
        </section>

        <footer className="bd-footer text-muted">
          <div className="container-fluid p-3 p-md-5">
            <hr className="border border-light" style={{ opacity: "0.1" }} />
            <p>
              Designed and built entirely by{" "}
              <a href="#">
                <mark>Eric Rydberg</mark>.
              </a>
            </p>
            <p>
              Built with{" "}
              <a href="https://reactjs.org/" target="_new">
                <mark>React</mark>
              </a>
              , a JavaScript library for user interfaces.
            </p>
            <p>
              Hosted on{" "}
              <a href="https://azure.microsoft.com" target="_new">
                Microsoft <mark>Azure</mark> Cloud
              </a>{" "}
              on{" "}
              <a href="https://ubuntu.com/" target="_new">
                <mark>Ubuntu Linux</mark>
              </a>
              .
            </p>
          </div>
        </footer>
      </div>
    );
  }
}
