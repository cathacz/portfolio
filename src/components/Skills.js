import React from "react";
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
        <p>
          <div className="toolTip">
            <SiJavascript />
            <span className="tTtext">JavaScript</span>
          </div>
          &nbsp;
          <SiReact />
          &nbsp;
          <SiSass />
        </p>
        <p>
          {" "}
          <IoTerminal /> &nbsp;
          <SiGit />
          &nbsp;
          <SiGithub />
        </p>
        <p>
          <SiAdobeindesign />
          &nbsp;
          <SiAdobephotoshop />
          &nbsp;
          <SiAdobeillustrator />
        </p>
      </div>
    </React.Fragment>
  );
};

export default Skills;
