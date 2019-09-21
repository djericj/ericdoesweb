import React from "react";
import { Avatar } from "@material-ui/core";

const TopNav = props => {
  return (
    <nav class="navbar navbar-light bg-light">
      <div class="media sidebar-header" href="#">
        <div className="profilepic">
          <Avatar
            alt="Eric Rydberg"
            src="/images/0.jpg"
            className={props.classes.bigAvatar}
            style={{ width: "60px", height: "60px", marginLeft: "20px" }}
          />
        </div>
        <div className="media-body">
          <h3 className="mt-0">
            Eric <strong>Rydberg</strong>
          </h3>
          <span className="secondary">Web Developer</span>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
