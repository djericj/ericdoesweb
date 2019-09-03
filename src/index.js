import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import { Root, Content, Footer } from "mui-layout";
import { MuiNav } from "./layout/Nav";

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
        <MuiNav
          renderIcon={collapsed =>
            collapsed ? <ChevronRight /> : <ChevronLeft />
          }
        ></MuiNav>
        <Content>
          <App />
        </Content>
      </Root>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
