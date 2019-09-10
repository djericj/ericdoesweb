import React from "react";
import Job from "./Job";
import data from "../data/experience.json";

const Experience = () => {
  return data.map(d => {
    return (
      <Job
        alt=""
        image=""
        title={d.title}
        subtitle={d.subtitle}
        environment={d.environment}
        from={d.from}
        to={d.to}
        description={d.description}
      ></Job>
    );
  });
};

export default Experience;
