import React from "react";
import { Button, Typography } from "@material-ui/core";
import ContentBox from "../layout/contentBox";
import GetAppIcon from "@material-ui/icons/GetApp";

const DownloadResume = props => {
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        size="small"
        className={props.classes.button}
      >
        Download my resume (.docx)
      </Button>
    </div>
  );
};

export default DownloadResume;
