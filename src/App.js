import React from "react";
import { Switch, Route } from "react-router-dom";
import Resume from "./components/Resume";
import Experience from "./components/Experience";
import Start from "./components/Start";
import Portfolio from "./components/Portfolio";
import Technologies from "./components/Technologies";
import Audio from "./components/Audio";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Start} />
        <Route path="/resume" component={Resume} />
        <Route path="/experience" component={Experience} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/technologies" component={Technologies} />
        <Route path="/audio" component={Audio} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
};

export default App;
