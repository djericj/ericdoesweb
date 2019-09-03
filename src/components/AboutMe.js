import React from "react";
import ContentBox from "../layout/contentBox";
import Typography from "@material-ui/core/Typography";
import CommentIcon from "@material-ui/icons/Comment";

const aboutMe = `I have a thirst for knowledge. Highly curious. I like intellectually
interesting work and exploring new ideas. I am an independent
thinker. I am always looking to improve: New approaches, strategies,
tactics, technologies. I can take in complex principles and
techniques and change them into clear and actionable strategies.`;

const AboutMe = props => {
  return (
    <ContentBox
      classes={props.classes}
      title={
        <Typography>
          <strong>About</strong> Me
        </Typography>
      }
      content={aboutMe}
      icon={<CommentIcon fontSize="large" />}
    />
  );
};

export default AboutMe;
