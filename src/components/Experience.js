import React from "react";
import Job from "./Job";
import data from "../data/experience.json";

const Experience = () => {
  return (
    <ul className="timeline">
      <Job2 />
    </ul>
  );
};

const Job2 = () => {
  return data.map(d => {
    return (
      <li key={d.title}>
        <div className="row pb-2">
          <div className="col-sm-6 col-xs-12">
            <h5>{d.title}</h5>
          </div>
          <div className="col-sm-6 col-xs-12 text-right">
            <h5>
              {d.from} to {d.to}
            </h5>
          </div>
        </div>

        <div className="clearfix">
          <h6 className="pb-2 text-white-50">{d.subtitle}</h6>
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
      <li key={p.item}>
        <p>{p.item}</p>
      </li>
    );
  });
};

export default Experience;
