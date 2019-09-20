import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AboutMe from "./AboutMe";
import TechnicalSkills from "./TechnicalSkills";
import ProfessionalSummary from "./ProfessionalSummary";

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
    <div className="row padding-lg">
      <div className="col-sm-6 col-xs-12">
        <ProfessionalSummary />
      </div>
      <div className="col-sm-6 col-xs-12">
        <TechnicalSkills classes={classes} />
      </div>
    </div>
  );
};

export default Resume;
