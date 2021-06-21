import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { IoTerminal } from "react-icons/io5";
import {
  SiAdobeindesign,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiReact,
  SiSass,
  SiJavascript,
  SiGithub,
  SiGit,
} from "react-icons/si";

const Skills = () => {
  return (
    <React.Fragment>
      <div className="skills">
        {" "}
        <h2>Skills</h2>
        <h3>most wanted</h3>
        <p>
          <div className="toolTip">
            <SiJavascript />
            <span className="tTtext">JavaScript</span>
          </div>
          &nbsp;
          <div className="toolTip">
            <SiReact />
            <span className="tTtext">React</span>
          </div>
          &nbsp;
          <div className="toolTip">
            <SiSass />
            <span className="tTtext">Sass</span>
          </div>
        </p>
        <p>
          <div className="toolTip">
            <IoTerminal />
            <span className="tTtext">Terminal</span>
          </div>
          &nbsp;
          <div className="toolTip">
            <SiGit />
            <span className="tTtext">Git</span>
          </div>
          &nbsp;
          <div className="toolTip">
            <SiGithub />
            <span className="tTtext">Github</span>
          </div>
        </p>
        <p>
          <div className="toolTip">
            <SiAdobeindesign />
            <span className="tTtext">Adobe InDesign</span>
          </div>
          &nbsp;
          <div className="toolTip">
            <SiAdobephotoshop />
            <span className="tTtext">Adobe Photoshop</span>
          </div>
          &nbsp;
          <div className="toolTip">
            <SiAdobeillustrator />
            <span className="tTtext">Adobe Illustrator</span>
          </div>
        </p>
        <h3>not skilled enough?</h3>
        <Link to="/moreskills">
          <li> more Skills</li>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Skills;
