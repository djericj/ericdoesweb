import React from "react";
import { Chip, Typography } from "@material-ui/core";
import ComputerIcon from "@material-ui/icons/Computer";
import ContentBox from "../layout/contentBox";

const TechnicalSkills = props => {
  return (
    <div className="resume-box">
      <span className="icon">
        <i className="fa fa-laptop fa-3x"></i>
      </span>
      <h4>
        <strong>Technical</strong> Skills
      </h4>
      <div>
        <ChipData classes={props.classes} />
      </div>
    </div>
  );
};

const ChipData = props => {
  return [
    { key: 0, label: "ASP.NET" },
    { key: 1, label: "C#" },
    { key: 2, label: "Microsoft SQL" },
    { key: 3, label: "MVC" },
    { key: 4, label: "Web Development" },
    { key: 5, label: "Solution Architecture" },
    { key: 6, label: "Web Services" },
    { key: 7, label: "Web API" },
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
