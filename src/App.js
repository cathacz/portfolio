import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Data from "./data.json";
import Menu from "./components/Menu";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ProjectReadMe from "./components/ProjectReadMe";
import Contact from "./components/Contact";
import WrongTurn from "./components/WrongTurn";
import Footer from "./components/Footer";
import Imprint from "./components/Imprint";

import { FaBeer, FaItunesNote, GiMailbox } from "react-icons/fa";

function App() {
  return (
    <Router>
      <header>
        <Menu />
      </header>
      <main>
        <div className="main">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={AboutMe} />
            <Route path="/skills" component={Skills} />
            <Route
              path="/projects"
              component={() => <Projects data={Data} />}
            />
            <Route
              path="/projects/:id"
              component={({ match }) => (
                <ProjectReadMe data={Data} id={match.params.id} />
              )}
            />
            <Route path="/contact" component={Contact} />
            <Route path="/imprint" component={Imprint} />
            <Route path={() => "/main" || "/admin" || "/any-other-word"}>
              <WrongTurn />
            </Route>
          </Switch>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
