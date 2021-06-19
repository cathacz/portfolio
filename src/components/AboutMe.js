import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Skills from "./Skills";

const AboutMe = () => {
  function openSkills(e) {
    return <p>Pensi</p>;
  }

  return (
    <React.Fragment>
      {" "}
      <div className="about">
        <h2>About me</h2>
        <p>
          Personal Stuff, no one is really reading, because everybody is
          brutally self absorbed OR "I promise, I will write something smart and
          interesting here later". Here is some lorem: Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Sed consequuntur eius culpa.
          Architecto, ex debitis. Inventore quos unde totam neque. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Atque suscipit in magni
          dolorem, enim, deleniti distinctio porro tempore ipsam debitis
          recusandae totam vitae. Libero, iusto.
        </p>
        <h3>Wanna know more about me?</h3>
        {/* <Route path="/skills" component={Skills} /> */}
        <Link to="/skills">
          <li>Skills</li>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default AboutMe;
