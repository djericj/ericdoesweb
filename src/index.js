import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import { Root, Content } from "mui-layout";
import { SideNav } from "./layout/Nav";

const baseTheme = createMuiTheme();

const defaultConfig = {
  navWidth: 320, // number | object
  navAnchor: "left",
  navVariant: {
    xs: "temporary",
    md: "permanent"
  }, // string | object
  collapsible: false, // boolean | object
  collapsedWidth: 64, // number | object
  collapsedBreakpoint: "md", // one of ['sm', 'md', 'lg']
  autoCollapsedDisabled: false,
  clipped: false, // boolean | object
  heightAdjustmentDisabled: false,
  initialAdjustmentHeight: 64, // number | object
  heightAdjustmentSpeed: 144, // number(ms)
  headerPosition: "relative", // one of ['static', 'relative', 'sticky', 'fixed', 'absolute', 'fixed'] | object
  squeezed: false, // boolean | object
  footerShrink: true // boolean | object
};

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={baseTheme}>
      <Root config={defaultConfig}>
        <div class="wrapper view">
          <nav id="sidebar">
            <SideNav />
          </nav>
          <div id="content" class="maskd">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <div class="container-fluid">
                <button type="button" id="sidebarCollapse" class="btn btn-info">
                  <i class="fas fa-align-left"></i>
                  <span>Toggle Sidebar</span>
                </button>
              </div>
            </nav>
            <App />
          </div>
        </div>
      </Root>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
