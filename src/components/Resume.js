import React from "react";

import AboutMe from "./AboutMe";
import TechnicalSkills from "./TechnicalSkills";
import ProfessionalSummary from "./ProfessionalSummary";

const Resume = () => {
  return (
    <div>
      <ProfessionalSummary />
      <TechnicalSkills classes={classes} />
    </div>
  );
};

export default Resume;
