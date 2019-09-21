import React from "react";
import {
  Grid,
  Divider,
  Button,
  Container,
  Avatar,
  makeStyles
} from "@material-ui/core";
import Scrollspy from "react-scrollspy";

const useStyles = makeStyles(theme => ({
  button: {
    flexGrow: 1,
    margin: 15
  },
  avatar: {
    margin: 10,
    backgroundColor: "#fff",
    color: "#4159a3"
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60
  }
}));

export const SideNav = () => {
  const classes = useStyles();
  return (
    <div className="">
      <Grid container>
        <div className="media sidebar-header">
          <div className="profilepic">
            <Avatar
              alt="Eric Rydberg"
              src="/images/0.jpg"
              className={classes.bigAvatar}
            />
          </div>
          <div className="media-body">
            <h3 className="mt-0">
              Eric <strong>Rydberg</strong>
            </h3>
            <span className="secondary">Web Developer</span>
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
          href="https://www.dropbox.com/s/k4qrao3tzwousn2/Resume%202019%20Eric%20Rydberg.docx?dl=0"
          target="_new"
          className="list-group-item list-group-item-action"
        >
          Download my resume
        </a>
      </div>

      <Divider />

      <div className="social-media">
        <Divider />
        <ul className="nav margin-t-10 justify-content-center">
          <li className="nav-item">
            <a
              href="https://www.linkedin.com/in/eric-rydberg-6657043/"
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

const MenuListItem = props => {
  const classes = useStyles();
  return (
    <li className="nav-item border-bottom">
      <a href={props.link} className="nav-link">
        {/* {props.icon}  */}
        {props.primary}
      </a>
    </li>
  );
};

export default SideNav;
