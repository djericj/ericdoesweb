import React from "react";
import {
  Container,
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

const useStyles = makeStyles(theme => ({
  button: {
    flexGrow: 1,
    margin: 15
  }
}));

export const MuiNav = () => {
  const classes = useStyles();
  return (
    <Drawer variant="persistent" open={true}>
      <div className="">
        <div className="">
          <h1>
            Eric <strong>Rydberg</strong>
          </h1>
          <span className="">Software Developer</span>
        </div>
        <Divider />
        <List>
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
    </Drawer>
  );
};

const MenuListItem = props => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>{props.icon}</Avatar>
      </ListItemAvatar>
      <Link to={props.link}>
        <ListItemText primary={props.primary} secondary={props.secondary} />
      </Link>
    </ListItem>
  );
};

export default MuiNav;
