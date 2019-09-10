import React from "react";
import {
  CardHeader,
  CardMedia,
  CardContent,
  IconButton
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const CustomCard = props => {
  return (
    <CardCore className={props.classes.card}>
      <CardHeader
        avatar={props.avatar}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.title}
        subheader={props.subheader}
      />
      <CardMedia className={props.classes.media} title={props.alt}>
        <img src={props.image} />
      </CardMedia>
      <CardContent>{props.content}</CardContent>
    </CardCore>
  );
};

export default CustomCard;
