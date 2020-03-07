import React from "react";

const aboutMeLead = `I have been designing and developing for the web since the beginning.`;

const aboutMe = `When I started, Amazon was a single page to find rare books, 
Google was a college project called PageRank and the dominant web browser of the time was Netscape Navigator.  
I've seen big computer companies come and go, Internet giants rise and fall. I have been a part of the web since it all started.  I believe this gives me a unique perspective, wisdom and insight.`;

const AboutMe = props => {
  return (
    <div className="resume-box">
      <p className="lead">{aboutMeLead}</p>
      <h6 style={{ lineHeight: "1.9em" }}>{aboutMe}</h6>
    </div>
  );
};

export default AboutMe;
