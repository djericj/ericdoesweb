import React from "react";
import ContentBox from "../layout/contentBox";
import Typography from "@material-ui/core/Typography";
import GetAppIcon from "@material-ui/icons/GetApp";

const DownloadResume = props => {
  return (
    <ContentBox
      classes={props.classes}
      title={
        <Typography>
          <strong>Download</strong> a copy in Word (.docx) format
        </Typography>
      }
      content="<Button>"
      icon={<GetAppIcon fontSize="large" />}
    />
  );
};

export default DownloadResume;
