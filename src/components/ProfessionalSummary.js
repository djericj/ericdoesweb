import React from "react";

const Items = [
  {
    key: 0,
    item: "Full stack web development",
    icon: "fa fa-tachometer fa-2x pull-left",
    description:
      "Full stack web development and solution architecture using C#, ASP.NET WebForms and MVC, Razor, Bootstrap, JavaScript, JQuery.   Experience with Angular up to version 7."
  },
  {
    key: 1,
    item: "Object oriented programming.",
    icon: "fa fa-cube fa-2x pull-left",
    description:
      "Experience building a wide variety of web applications, from public facing sites to internal management applications."
  },
  {
    key: 2,
    item: "Data modeling and database design.",
    icon: "fa fa-database fa-2x pull-left",
    description:
      "Data modeling and database design for both relational and star schema databases.  Object Relational Mapping (ORM) frameworks including Dapper, OData, Entity Framework and iBatis.NET. "
  },
  {
    key: 3,
    item: "N-Tier Solution Architecture.",
    icon: "fa fa-building-o fa-2x pull-left",
    description:
      "N-tier application architecture provides a model by which developers can create flexible and reusable applications."
  },
  {
    key: 4,
    item: "Cloud based services with Microsoft Azure",
    icon: "fa fa-cloud fa-2x pull-left",
    description:
      "Experience with setting up and managing Azure DevOps, Azure Web Services, Resource Groups, Azure SQL and Virtual Machines.  "
  },
  {
    key: 5,
    item: "Agile Software Development",
    icon: "fa fa-paper-plane fa-2x pull-left",
    description:
      "Advocate adaptive planning, evolutionary development, early delivery, and continual improvement. Rapid and flexible response to change.  Azure DevOps Continuous Integration and Deployment."
  }
];

const ProfessionalSummary = () => {
  return (
    <div className="row ml-1">
      <ItemsArray />
    </div>
  );
};

const ItemsArray = () => {
  return Items.map(data => {
    return (
      <div className="pb-4 col-6" key={data.key}>
        <div className="media">
          <div className="mr-4" style={{ width: "32px" }}>
            <i className={data.icon}></i>
          </div>
          <div className="media-body">
            <h5 className="mt-0">{data.item}</h5>
            {data.description}
          </div>
          <p className="border-bottom border-secondary"></p>
        </div>
      </div>
    );
  });
};

export default ProfessionalSummary;
