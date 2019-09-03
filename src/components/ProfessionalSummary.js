import React from "react";
import ContentBox from "../layout/contentBox";
import Typography from "@material-ui/core/Typography";
import MouseIcon from "@material-ui/icons/Mouse";

const Items = [
  {
    item:
      "Full stack web development and solution architecture using C#, ASP.NET WebForms and MVC, Razor, Bootstrap, JavaScript, JQuery.   Experience with Angular up to version 7."
  },
  {
    item:
      "Experience building a wide variety of web applications, from public facing sites to internal management applications."
  },
  {
    item:
      "Experience designing and managing server architectures to support web applications, both on-premises and on Azure App Services."
  },
  {
    item:
      "Software Development Life Cycle, Continuous Integration and Deployment on TFS 2017 and Azure DevOps"
  },
  { item: "Object oriented programming." },
  {
    item:
      "Data modeling and database design for both relational and star schema databases."
  },
  {
    item:
      "Object Relational Mapping (ORM) frameworks including iBatis.NET and some Entity Framework."
  },
  { item: "N-Tier Solution Architecture." },
  { item: "Git and Team Foundation Version Control" },
  {
    item:
      "Service Oriented Architecture using both XML and JSON in SOAP, WCF, Web API, REST API.  "
  },
  {
    item:
      "Microsoft SQL Database development & maintenance, both on-premises and Azure SQL Databases."
  },
  { item: "Microsoft Reporting Services report development and design." },
  { item: ".NET Best Practices and Standards." },
  { item: "Agile software development" },
  { item: "Desktop development with WPF, WinForms and WiX Toolset." }
];

const ProfessionalSummary = props => {
  return (
    <ContentBox
      classes={props.classes}
      title={
        <Typography>
          <strong>Professional</strong> Summary
        </Typography>
      }
      content={<ItemsArrayList />}
      icon={<MouseIcon fontSize="large" />}
    />
  );
};

const ItemsArrayList = () => {
  return (
    <ul>
      <ItemsArray />
    </ul>
  );
};

const ItemsArray = () => {
  return Items.map(data => {
    return <li>{data.item}</li>;
  });
};

export default ProfessionalSummary;
