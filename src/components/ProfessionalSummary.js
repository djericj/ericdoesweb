import React from "react";

const Items = [
  {
    key: 0,
    item: "Full stack web development",
    icon: "fa fa-th-list fa-2x pull-left"
  },
  {
    key: 1,
    item: "Object oriented programming.",
    icon: "fa fa-object-ungroup fa-2x pull-left"
  },
  {
    key: 2,
    item: "Data modeling and database design.",
    icon: "fa fa-database fa-2x pull-left"
  },
  {
    key: 3,
    item: "N-Tier Solution Architecture.",
    icon: "fa fa-building-o fa-2x pull-left"
  },
  {
    key: 4,
    item: " Microsoft Azure Cloud.",
    icon: "fa fa-cloud fa-2x pull-left"
  }
];

const ProfessionalSummary = () => {
  return (
    <div className="resume-box">
      <span className="icon">
        <i className="fa fa-book fa-3x"></i>
      </span>
      <h4>
        <strong>Professional</strong> Summary
      </h4>

      <div>
        <ItemsArrayList />
      </div>
    </div>
  );
};

const ItemsArrayList = () => {
  return (
    <div className="">
      <ItemsArray />
    </div>
  );
};

const ItemsArray = () => {
  return Items.map(data => {
    return (
      <span key={data.key}>
        <i className={data.icon}></i>
        <p key={data.key}>{data.item}</p>
        <p className="border-bottom border-secondary"></p>
      </span>
    );
  });
};

export default ProfessionalSummary;
