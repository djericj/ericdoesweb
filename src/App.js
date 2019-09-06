import React from "react";
import { Switch, Route } from "react-router-dom";
import Resume from "./components/Resume";
import Experience from "./components/Experience";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Technologies from "./components/Technologies";
import Audio from "./components/Audio";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={AboutMe} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/experience" component={Experience} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/technologies" component={Technologies} />
        <Route exact path="/audio" component={Audio} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
  );
};

export default App;
