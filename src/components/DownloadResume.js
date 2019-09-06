import React from "react";
import { Button, Typography } from "@material-ui/core";
import ContentBox from "../layout/contentBox";
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
      content={
        <Button
          variant="contained"
          color="primary"
          size="small"
          className={props.classes.button}
        >
          Download my resume (.docx)
        </Button>
      }
      icon={<GetAppIcon fontSize="large" />}
    />
  );
};

export default DownloadResume;
