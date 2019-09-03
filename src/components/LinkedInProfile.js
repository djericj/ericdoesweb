import React from "react";
import ContentBox from "../layout/contentBox";
import Typography from "@material-ui/core/Typography";
import { ReactComponent as LinkedInIcon } from "../_ionicons_svg_logo-linkedin.svg";

const LinkedIn = props => {
  return (
    <div>
      <Typography>test</Typography>
    </div>
  );
};

const LinkedInProfile = props => {
  return (
    <ContentBox
      classes={props.classes}
      title={
        <Typography>
          My profile on <strong>LinkedIn</strong>
        </Typography>
      }
      content={<LinkedIn />}
      icon={<LinkedInIcon fontSize="large" width="32px" />}
    />
  );
};

export default LinkedInProfile;
