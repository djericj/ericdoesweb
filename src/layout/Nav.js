import React from "react";
import { Grid, Divider, Avatar } from "@material-ui/core";

export const SideNav = (props) => {
  return (
    <div className="">
      <Grid container>
        <div className="media sidebar-header">
          <div className="profilepic">
            <Avatar
              alt="Eric Rydberg"
              src="/images/0.jpg"
              className={props.classes.bigAvatar}
            />
          </div>
          <div className="media-body">
            <h3 className="mt-0">
              Eric <strong>Rydberg</strong>
            </h3>
            <span className="secondary">Full stack developer</span>
          </div>
        </div>
      </Grid>
      <Divider />

      <div id="nav-menu" className="nav flex-column list-group">
        <a
          href="#aboutme"
          className="list-group-item list-group-item-action active"
        >
          About me
        </a>
        <a
          href="#professional-summary"
          className="list-group-item list-group-item-action"
        >
          Professional summary
        </a>
        <a
          href="#technical-skills"
          className="list-group-item list-group-item-action"
        >
          Technical skills
        </a>
        <a
          href="#experience"
          className="list-group-item list-group-item-action"
        >
          Experience
        </a>
        <a href="#portfolio" className="list-group-item list-group-item-action">
          Portfolio
        </a>
        <a href="#contact" className="list-group-item list-group-item-action">
          Contact me
        </a>
        <a
          href="https://www.dropbox.com/s/fdnh87pjcl6wtud/Resume%202022%20Eric%20Rydberg.docx?dl=0"
          target="_new"
          className="list-group-item list-group-item-action"
        >
          Download my resume
        </a>
        <a
          href="https://www.linkedin.com/in/eric-r-6657043/"
          target="_new"
          className="list-group-item list-group-item-action"
        >
          Message me on LinkedIn
        </a>
      </div>

      <Divider />

      <div className="social-media">
        <Divider />
        <ul className="nav margin-t-10 justify-content-center">
          <li className="nav-item">
            <a
              href="https://www.linkedin.com/in/eric-r-6657043/"
              target="_new"
              className="nav-link"
              title="My professional profile on Linked In"
              data-toggle="tooltip"
              data-placement="top"
            >
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://github.com/djericj"
              target="_new"
              className="nav-link"
              title="Take a look at some of the code I've done."
              data-toggle="tooltip"
              data-placement="top"
            >
              <i className="fa fa-github"></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://stackoverflow.com/users/10255368/eric-j"
              target="_new"
              className="nav-link"
              title="Questions, answers and interaction with the developer community."
              data-toggle="tooltip"
              data-placement="top"
            >
              <i className="fa fa-stack-overflow"></i>
            </a>
          </li>
        </ul>
      </div>
      {/* 
      <Button
        href="https://www.dropbox.com/s/k4qrao3tzwousn2/Resume%202019%20Eric%20Rydberg.docx?dl=0"
        variant="contained"
        color="primary"
        size="small w-100"
        className={classes.button}
      >
        Download my resume
      </Button> */}
    </div>
  );
};

export default SideNav;
