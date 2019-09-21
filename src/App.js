import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";
import Experience from "./components/Experience";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import DownloadResume from "./components/DownloadResume";
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
  }
}));

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid">
        <section id="aboutme" className="pt-5">
          <span className="icon float-right">
            <i className="fa fa-commenting fa-3x"></i>
          </span>
          <h2 id="aboutme">25 years of development, since 1995.</h2>

          <a name="aboutme"></a>
          <AboutMe classes={classes} />
        </section>
        <hr class="border border-light" style={{ opacity: "0.1" }} />
        <section id="professional-summary" className="pt-5">
          <span className="icon float-right">
            <i className="fa fa-book fa-3x"></i>
          </span>
          <h2 id="professional-summary" class="pb-5">
            Professional summary
          </h2>
          <a name="professional-summary"></a>

          <ProfessionalSummary classes={classes} />
        </section>
        <hr class="border border-light" style={{ opacity: "0.1" }} />
        <section id="technical-skills" className="pt-5">
          <span className="icon float-right">
            <i className="fa fa-laptop fa-3x"></i>
          </span>
          <h2 id="technical-skills" class="pb-5">
            Technical skills
          </h2>
          <a name="technical-skills"></a>

          <TechnicalSkills classes={classes} />
        </section>
        <hr class="border border-light" style={{ opacity: "0.1" }} />
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
          <h2 id="experience" class="pb-5">
            Experience
          </h2>
          <a name="experience"></a>
          <Experience classes={classes} />
        </section>
        <hr class="border border-light" style={{ opacity: "0.1" }} />
        <section id="portfolio" className="pt-5">
          <span className="icon float-right">
            <i className="fa fa-folder-open fa-3x"></i>
          </span>
          <h2 id="portfolio" class="pb-5">
            Portfolio
          </h2>
          <a name="portfolio"></a>
          <Portfolio classes={classes} />
        </section>
        <hr class="border border-light" style={{ opacity: "0.1" }} />
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
          <h2 id="contact" class="pb-5">
            Contact me
          </h2>
          <a name="contact"></a>
          <Contact classes={classes} />
          <footer class="bd-footer text-muted">
            <div class="container-fluid p-3 p-md-5">
              <ul class="bd-footer-links">
                <li>
                  <a href="https://github.com/twbs/bootstrap">GitHub</a>
                </li>
                <li>
                  <a href="https://twitter.com/getbootstrap">Twitter</a>
                </li>
                <li>
                  <a href="/docs/4.3/examples/">Examples</a>
                </li>
                <li>
                  <a href="/docs/4.3/about/overview/">About</a>
                </li>
              </ul>
              <p>
                Designed and built with all the love in the world by the{" "}
                <a href="/docs/4.3/about/team/">Bootstrap team</a> with the help
                of{" "}
                <a href="https://github.com/twbs/bootstrap/graphs/contributors">
                  our contributors
                </a>
                .
              </p>
              <p>
                Currently v4.3.1. Code licensed{" "}
                <a
                  href="https://github.com/twbs/bootstrap/blob/master/LICENSE"
                  target="_blank"
                  rel="license noopener"
                >
                  MIT
                </a>
                , docs{" "}
                <a
                  href="https://creativecommons.org/licenses/by/3.0/"
                  target="_blank"
                  rel="license noopener"
                >
                  CC BY 3.0
                </a>
                .
              </p>
            </div>
          </footer>
        </section>

        <ToastContainer />
      </div>
    );
  }
}
