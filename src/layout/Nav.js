import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Link from "@material-ui/core/Link";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import CodeIcon from "@material-ui/icons/Code";
import WorkIcon from "@material-ui/icons/Work";
import DescriptionIcon from "@material-ui/icons/Description";
import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";
import PermPhoneMsgIcon from "@material-ui/icons/PermPhoneMsg";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import { Nav } from "mui-layout";

export const MuiNav = () => {
  return (
    <Drawer variant="persistent" open="true">
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
            link="#four"
            primary="Start"
            secondary="The beginning is here"
          />

          <MenuListItem
            icon={<DescriptionIcon />}
            link="#four"
            primary="Resume"
            secondary="All the things I know how to do"
          />

          <MenuListItem
            icon={<WorkIcon />}
            link="#four"
            primary="Experience"
            secondary="Places I have worked"
          />

          <MenuListItem
            icon={<CodeIcon />}
            link="#four"
            primary="Portfolio"
            secondary="Examples of projects I have done"
          />

          <MenuListItem
            icon={<ImportantDevicesIcon />}
            link="#four"
            primary="Technologies I Use"
            secondary="C#, JavaScript, Angular, React"
          />

          <MenuListItem
            icon={<VolumeUpIcon />}
            link="#four"
            primary="Audio & Music"
            secondary="I also do audio engineering"
          />

          <MenuListItem
            icon={<PermPhoneMsgIcon />}
            link="#four"
            primary="Contact Me"
            secondary="Email me or find me online"
          />
        </List>
        <Divider />
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
      <Link href={props.link}>
        <ListItemText primary={props.primary} secondary={props.secondary} />
      </Link>
    </ListItem>
  );
};

export default MuiNav;
