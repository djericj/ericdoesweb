import React from "react";
import ContentBox from "../layout/contentBox";
import Typography from "@material-ui/core/Typography";
import SchoolIcon from "@material-ui/icons/School";

const Items = () => {
  return (
    <div>
      <Typography variant="subtitle1">Self Taught</Typography>

      <p>
        I am completely self-taught. When I started in 1993, there was no formal
        education for web design or development. The World Wide Web was too new
        and universities did not offer courses for the web. They had not even
        considered such a thing.
      </p>
      <p>
        I started doing web work when the web was a much simpler place. Most web
        sites were simple HTML pages. Only a small percentage of the population
        had access to the Internet and almost all of it was accessed via 28.8K
        telephone modems. Amazon was a single page where you could email Jeff
        Bezos to find rare books. Google was still a university research project
        by Larry Page and Sergey Brin called PageRank. Netscape Navigator was
        the dominant browser with over 90% "market share". Microsoft had just
        changed the desktop computer market with the newly released Windows 95.
      </p>
      <p>
        Since I started so early before most of what we know today even existed,
        I have been in a unique position in my career. I have grown right along
        with the Internet. I've seen new tech come and go. I've seen the rise
        and fall of internet giants. I've seen the transformation of the
        internet from a novelty to a necessity in the lives of almost every
        person. I believe this gives me a unique wisdom and sense of history
        that provides me institutional knowledge that many other technology
        professionals do not posess. I know the reasons why things are they way
        the are and how they came to be. This allows me to see clearly toward
        the future of the Internet and separate the chuff from the wheat.
      </p>
    </div>
  );
};

const Education = props => {
  return (
    <ContentBox
      classes={props.classes}
      title={
        <Typography>
          <strong>Education</strong>
        </Typography>
      }
      content={<Items />}
      icon={<SchoolIcon fontSize="large" />}
    />
  );
};

export default Education;
