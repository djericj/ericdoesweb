import React from "react";
import Job from "./Job";
import data from "../data/experience.json";

const Experience = () => {
  return (
    <ul class="timeline">
      <Job2 />
    </ul>
  );
};

const Jobs = () => {
  return data.map(d => {
    return (
      <Job
        key={d.title}
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

const Job2 = () => {
  return data.map(d => {
    return (
      <li>
        <div class="row pb-2">
          <div class="col-sm-6 col-xs-12">
            <h5>{d.title}</h5>
          </div>
          <div class="col-sm-6 col-xs-12 text-right">
            <h5>
              {d.from} to {d.to}
            </h5>
          </div>
        </div>

        <div class="clearfix">
          <h6 class="pb-2 text-white-50">{d.subtitle}</h6>
          <ul>
            <JobItem description={d.description} />
          </ul>
        </div>
      </li>
    );
  });
};

const JobItem = props => {
  return props.description.map(p => {
    return (
      <li>
        <p>{p.item}</p>
      </li>
    );
  });
};

export default Experience;
