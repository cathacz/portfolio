import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Data from "./data.json";
import Menu from "./components/Menu";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ProjectReadMe from "./components/ProjectReadMe";
import Contact from "./components/Contact";
import WrongTurn from "./components/WrongTurn";

import { FaBeer, FaItunesNote } from "react-icons/fa";

function App() {
  return (
    <Router>
      <header>
        <Menu />
      </header>
      <div className="main">
        <Switch>
          <Route path="/" exact component={Home} />{" "}
          <Route path="/about" component={AboutMe} />
          <Route path="/projects" component={() => <Projects data={Data} />} />
          <Route
            path="/products/:id"
            component={({ match }) => (
              <ProjectReadMe data={Data} id={match.params.id} />
            )}
          />
          <Route path="/contact" component={Contact} />
          <Route path={() => "/main" || "/admin" || "/any-other-word"}>
            <WrongTurn />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
