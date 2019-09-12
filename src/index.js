import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { SideNav } from "./layout/Nav";

ReactDOM.render(
  <div className="bg-dark">
    <nav id="sidebar">
      <SideNav />
    </nav>
    <div id="content">
      <App />
    </div>
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
