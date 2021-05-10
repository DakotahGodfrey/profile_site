import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Contact from "./components/pages/contact/Contact";
import Projects from "./components/pages/projects/Projects";
import "./assets/scss/index.scss";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} title="Home" />
          <Route exact path="/about" component={About} title="About" />
          <Route exact path="/contact" component={Contact} title="Contact" />
          <Route exact path="/projects" component={Projects} title="projects" />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
