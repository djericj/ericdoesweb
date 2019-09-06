import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ContentBox from "../layout/contentBox";
import Typography from "@material-ui/core/Typography";
import CommentIcon from "@material-ui/icons/Comment";
import Education from "./Education";

const useStyles = makeStyles(theme => ({
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

const aboutMe = `I have a thirst for knowledge. Highly curious. I like intellectually
interesting work and exploring new ideas. I am an independent
thinker. I am always looking to improve: New approaches, strategies,
tactics, technologies. I can take in complex principles and
techniques and change them into clear and actionable strategies.`;

const AboutMe = props => {
  const classes = useStyles();
  return (
    <div>
      <ContentBox
        classes={classes}
        title={
          <Typography>
            <strong>About</strong> Me
          </Typography>
        }
        content={aboutMe}
        icon={<CommentIcon fontSize="large" />}
      />
      <Education classes={classes} />
    </div>
  );
};

export default AboutMe;
