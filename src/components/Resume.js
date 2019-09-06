import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import AboutMe from "./AboutMe";
import TechnicalSkills from "./TechnicalSkills";
import Certifications from "./Certifications";
import ProfessionalSummary from "./ProfessionalSummary";
import DownloadResume from "./DownloadResume";
import LinkedInProfile from "./LinkedInProfile";
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

const Resume = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item xs={8}>
        <ProfessionalSummary classes={classes} />

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <LinkedInProfile classes={classes} />
          </Grid>
          <Grid item xs={6}>
            <DownloadResume classes={classes} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <TechnicalSkills classes={classes} />
        <Certifications classes={classes} />
      </Grid>
    </Grid>
  );
};

export default Resume;
