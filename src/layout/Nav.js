import React from "react";
import {
  Container,
  Grid,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Button,
  makeStyles
} from "@material-ui/core";
import { Link } from "react-router-dom";
import {
  Code as CodeIcon,
  Work as WorkIcon,
  Description as DescriptionIcon,
  ImportantDevices as ImportantDevicesIcon,
  PermPhoneMsg as PermPhoneMsgIcon,
  VolumeUp as VolumeUpIcon,
  PersonPin as PersonPinIcon
} from "@material-ui/icons";
import { deepPurple } from "@material-ui/core/colors";

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
        <div class="media sidebar-header">
          <div class="avatar">
            <Avatar
              alt="Eric Rydberg"
              src="/images/0.jpg"
              className={classes.bigAvatar}
            />
          </div>
          <div class="media-body">
            <h3 class="mt-0">
              Eric <strong>Rydberg</strong>
            </h3>
            <span class="secondary">Web Developer</span>
          </div>
        </div>
      </Grid>
      <Divider />
      <List className="list-unstyled components">
        <MenuListItem
          icon={<PersonPinIcon />}
          link="/"
          primary="About Me"
          secondary="Where I've been, where I'm going"
        />

        <MenuListItem
          icon={<DescriptionIcon />}
          link="/resume"
          primary="Resume"
          secondary="All the things I know how to do"
        />

        <MenuListItem
          icon={<WorkIcon />}
          link="/experience"
          primary="Experience"
          secondary="Places I have worked"
        />

        <MenuListItem
          icon={<CodeIcon />}
          link="/portfolio"
          primary="Portfolio"
          secondary="Examples of projects I have done"
        />

        <MenuListItem
          icon={<ImportantDevicesIcon />}
          link="/technologies"
          primary="Technologies I Use"
          secondary="C#, JavaScript, Angular, React"
        />

        <MenuListItem
          icon={<VolumeUpIcon />}
          link="/audio"
          primary="Audio & Music"
          secondary="I also do audio engineering"
        />

        <MenuListItem
          icon={<PermPhoneMsgIcon />}
          link="/contact"
          primary="Contact Me"
          secondary="Email me or find me online"
        />
      </List>
      <Divider />
      <Container>
        <Button
          href="https://www.dropbox.com/s/k4qrao3tzwousn2/Resume%202019%20Eric%20Rydberg.docx?dl=0"
          variant="contained"
          color="primary"
          size="small"
          className={classes.button}
        >
          Download my resume (.docx)
        </Button>
      </Container>
    </div>
  );
};

const MenuListItem = props => {
  const classes = useStyles();
  return (
    <li>
      <Link to={props.link} activeClassName="active">
        <div class="media">
          <div class="avatar">
            <Avatar className={classes.avatar}>{props.icon}</Avatar>
          </div>
          <div class="media-body">
            <h5 class="mt-0">{props.primary}</h5>
            <span class="secondary">{props.secondary}</span>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default SideNav;
