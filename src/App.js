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

class Question extends React.Component {
  render() {
    return <h3> Lets go for a ? </h3>;
  }
}
function App() {
  return (
    <Router>
      <Menu />
      in process – have a <FaBeer /> while you are waiting <FaItunesNote />{" "}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/projects" component={() => <Projects data={Data} />} />
        <Route
          path="/products/:id"
          component={({ match }) => (
            <ProjectReadMe data={Data} id={match.params.id} />
          )}
        />
        <Route path="/about" component={AboutMe} />

        <Route path={() => "/main" || "/admin" || "/any-other-word"}>
          <WrongTurn />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
