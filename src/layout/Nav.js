import React from "react";
import {
  Grid,
  Divider,
  Button,
  Container,
  Avatar,
  makeStyles
} from "@material-ui/core";

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
      <ul className="nav flex-column">
        <MenuListItem
          icon={<i class="fas fa-user fa-lg nav-icon"></i>}
          link="#"
          primary="About Me"
          secondary="Where I've been, where I'm going"
        />
        <Divider />

        <MenuListItem
          icon={<i class="fas fa-file-alt fa-lg nav-icon"></i>}
          link="#resume"
          primary="Resume"
          secondary="All the things I know how to do"
        />
        <Divider />

        <MenuListItem
          icon={<i class="fas fa-briefcase fa-lg nav-icon"></i>}
          link="#experience"
          primary="Experience"
          secondary="Places I have worked"
        />
        <Divider />

        <MenuListItem
          icon={<i class="fas fa-code fa-lg nav-icon"></i>}
          link="#portfolio"
          primary="Portfolio"
          secondary="Examples of projects I have done"
        />
        <Divider />
        {/* 
        <MenuListItem
          icon={<ImportantDevicesIcon />}
          link="#technologies"
          primary="Technologies I Use"
          secondary="C#, JavaScript, Angular, React"
        /> */}

        <MenuListItem
          icon={<i class="fas fa-headphones fa-lg nav-icon"></i>}
          link="#audio"
          primary="Audio & Music"
          secondary="I also do audio engineering"
        />
        <Divider />
        <MenuListItem
          icon={<i class="fas fa-envelope-open fa-lg nav-icon"></i>}
          link="#contact"
          primary="Contact Me"
          secondary="Email me or find me online"
        />
      </ul>
      <Divider />

      <div class="social-media">
        <Divider />
        <ul class="nav margin-t-10 justify-content-center">
          <li class="nav-item">
            <a
              href="https://www.linkedin.com/in/eric-rydberg-6657043/"
              target="_new"
              class="nav-link"
              title="My profile on Linked In"
              data-toggle="tooltip"
              data-placement="top"
            >
              <i class="fa fa-linkedin"></i>
            </a>
          </li>
          <li class="nav-item">
            <a
              href="https://github.com/djericj"
              target="_new"
              class="nav-link"
              title="My open source code on GitHub"
              data-toggle="tooltip"
              data-placement="top"
            >
              <i class="fa fa-github"></i>
            </a>
          </li>
          <li class="nav-item">
            <a
              href="https://stackoverflow.com/users/10255368/eric-j"
              target="_new"
              class="nav-link"
              title="My community contributions on Stack Overflow"
              data-toggle="tooltip"
              data-placement="top"
            >
              <i class="fa fa-stack-overflow"></i>
            </a>
          </li>
        </ul>
      </div>
      {/* <Container>
        <Button
          href="https://www.dropbox.com/s/k4qrao3tzwousn2/Resume%202019%20Eric%20Rydberg.docx?dl=0"
          variant="contained"
          color="primary"
          size="small"
          className={classes.button}
        >
          Download my resume (.docx)
        </Button>
      </Container> */}
    </div>
  );
};

const MenuListItem = props => {
  const classes = useStyles();
  return (
    <li className="nav-item">
      <a href={props.link} className="nav-link">
        {/* {props.icon}  */}
        {props.primary}
      </a>
    </li>
  );
};

export default SideNav;
