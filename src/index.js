import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { SideNav } from "./layout/Nav";
import TopNav from "./layout/TopNav";
import { makeStyles } from "@material-ui/core";

export class Index extends React.Component {
  render() {
    const classes = makeStyles(theme => ({
      avatar: {
        margin: 10,
        backgroundColor: "#fff",
        color: "#4159a3"
      },
      bigAvatar: {
        margin: 10,
        width: 60,
        height: 60
      }
    }));
    return (
      <div className="row bg-dark">
        <div className="d-md-none d-lg-none w-100">
          <TopNav classes={classes} />
        </div>
        <nav id="sidebar" className="d-none d-md-block d-sm-none">
          <SideNav classes={classes} />
        </nav>
        <div id="content">
          <App classes={classes} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
