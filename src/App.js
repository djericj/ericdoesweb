import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme, Box, Typography, Paper } from "@material-ui/core";
import { ChevronLeft, MenuRounded, ChevronRight } from "@material-ui/icons";
import { Root, Header, Nav, Content, Footer } from "mui-layout";
import { MuiNav } from "./layout/Nav";
import Resume from "./components/Resume";

const baseTheme = createMuiTheme(); // or use your own theme;

const App = () => {
  return (
    <ThemeProvider theme={baseTheme}>
      <Root config={defaultConfig}>
        <MuiNav
          renderIcon={collapsed =>
            collapsed ? <ChevronRight /> : <ChevronLeft />
          }
        ></MuiNav>
        <Content>
          <Resume />
        </Content>
      </Root>
    </ThemeProvider>
  );
};

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

export default App;
