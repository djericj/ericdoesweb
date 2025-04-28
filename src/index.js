import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { SideNav } from "./layout/Nav";
import TopNav from "./layout/TopNav";
import { ThemeProvider, createTheme, makeStyles } from '@material-ui/core/styles';

const theme = createTheme();

export class Index extends React.Component {
  render() {
    const classes = makeStyles(() => ({
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
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
