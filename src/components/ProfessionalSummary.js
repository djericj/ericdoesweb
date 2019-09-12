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
    <div class="resume-box">
      <span class="icon">
        <i class="fa fa-book fa-3x"></i>
      </span>
      <h4>
        <strong>Professional</strong> Summary
      </h4>

      <p>
        <ItemsArrayList />
      </p>
    </div>
  );
};

const ItemsArrayList = () => {
  return (
    <div class="">
      <ItemsArray />
    </div>
  );
};

const ItemsArray = () => {
  return Items.map(data => {
    return (
      <span>
        <i class={data.icon}></i>
        <p key={data.key}>{data.item}</p>
        <p class="border-bottom border-secondary"></p>
      </span>
    );
  });
};

export default ProfessionalSummary;
