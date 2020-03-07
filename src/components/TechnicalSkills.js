import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Chip } from "@material-ui/core";

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

const TechnicalSkills = props => {
  const classes = useStyles();
  return (
    <div className="resume-box">
      <div>
        <ChipData classes={classes} />
      </div>
    </div>
  );
};

const ChipData = props => {
  return [
    { key: 0, label: ".NET Core" },
    { key: 1, label: "Web API" },
    { key: 2, label: "ASP.NET MVC" },
    { key: 3, label: "C#" },
    { key: 4, label: "Microsoft SQL" },
    { key: 5, label: "Web Development" },
    { key: 6, label: "Solution Architecture" },
    { key: 7, label: "Web Services" },
    { key: 8, label: "REST" },
    { key: 9, label: "JavaScript" },
    { key: 10, label: "JQuery" },
    { key: 11, label: "Angular" },
    { key: 12, label: "React" },
    { key: 13, label: "Bootstrap" },
    { key: 14, label: "HTML5" },
    { key: 15, label: "Microsoft Azure" },
    { key: 16, label: "Azure DevOps" },
    { key: 17, label: "Git" },
    { key: 18, label: "Material Design" }
  ].map(data => {
    let icon;

    // if (data.label === "React") {
    //   icon = <ComputerIcon />;
    // }

    return (
      <Chip
        key={data.key}
        icon={icon}
        label={data.label}
        className={props.classes.chip}
      />
    );
  });
};

export default TechnicalSkills;
