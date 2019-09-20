import React from "react";
import ReactDOM from "react-dom";
import { toast } from "react-toastify";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { SideNav } from "./layout/Nav";
import { ErrorBoundary } from "./components/ErrorBoundary";

export class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    toast.error(error.toString(), {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: false,
      className: "bg-danger",
      bodyClassName: ""
    });
    //console.log(errorInfo.toString());
  }

  render() {
    return (
      <div className="bg-dark">
        <ErrorBoundary>
          <nav id="sidebar">
            <SideNav />
          </nav>
          <div id="content">
            <App />
          </div>
        </ErrorBoundary>
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
