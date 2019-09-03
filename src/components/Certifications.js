import React from "react";
import ContentBox from "../layout/contentBox";
import Typography from "@material-ui/core/Typography";
import SchoolIcon from "@material-ui/icons/School";

const Items = () => {
  return (
    <div>
      <Typography variant="subtitle1">
        Microsoft Certified Professional
      </Typography>
      <Typography variant="caption">
        Microsoft Certified Software Developer (MCSD) .NET Framework
      </Typography>
    </div>
  );
};

const Certifications = props => {
  return (
    <ContentBox
      classes={props.classes}
      title={
        <Typography>
          <strong>Certifications</strong>
        </Typography>
      }
      content={<Items />}
      icon={<SchoolIcon fontSize="large" />}
    />
  );
};

export default Certifications;
