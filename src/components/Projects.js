import React from "react";
import { Link } from "react-router-dom";
import {
  SiCss3,
  SiHtml5,
  SiBootstrap,
  SiReact,
  SiSass,
  SiJavascript,
  SiGithub,
  SiGit,
} from "react-icons/si";

const Projects = ({ data }) => {
  const items = data.map((item) => {
    const { id, title, text, language, img, alt, link, buttonText } = item;
    return (
      <li key={id} className="project">
        <Link to={`/products/${id}`} />
        <div>
          <img src={`${process.env.PUBLIC_URL}/${img}`} alt={alt} />
          {/* data[0].png */}
        </div>
        <div className="leftSide">
          <h2>{title}</h2>
          <h3>{text}</h3>
          <p>
            {language.map((lang, i) => (
              <i key={i}>{lang}&nbsp;</i>
            ))}
            {/* <div className="toolTip">
              <{language} />

              <span className="tTtext">React</span>
            </div>  */}
          </p>
          <button>
            <a target="blank" href={link}>
              {buttonText}
            </a>
          </button>
        </div>
      </li>
    );
  });

  return (
    <React.Fragment>
      <ul>{items}</ul>
    </React.Fragment>
  );
};
export default Projects;
