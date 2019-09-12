import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const aboutMeLead = `I have a thirst for knowledge. Highly curious. I like intellectually
interesting work and exploring new ideas.`;

const aboutMe = `I am an independent
thinker. I am always looking to improve: New approaches, strategies,
tactics, technologies. I can take in complex principles and
techniques and change them into clear and actionable strategies.`;

const AboutMe = props => {
  return (
    <div class="resume-box">
      <span class="icon">
        <i class="fa fa-commenting fa-3x"></i>
      </span>
      <h4>
        <strong>About</strong> Me
      </h4>
      <p class="lead">{aboutMeLead}</p>
      <p>{aboutMe}</p>
    </div>
  );
};

export default AboutMe;
