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
    const {
      id,
      title,
      text,
      language,
      img,
      alt,
      link,
      buttonText,
      READMElink,
    } = item;
    return (
      <li key={id} className="project">
        <Link to={`/products/${id}`} />
        <div>
          {/* POP-UP Window if needed */}
          {/* <a
            target="popup"
            onclick="window.open
  ('', 'popup', 'width=580,height=360,scrollbars=no, toolbar=no,status=no,resizable=yes,menubar=no,location=no,directories=no,top=10,left=10')"
            href={`${process.env.PUBLIC_URL}/${img}`}
          >
            <img src={`${process.env.PUBLIC_URL}/${img}`} alt={alt} />
          </a> */}

          <img src={`${process.env.PUBLIC_URL}/${img}`} alt={alt} />
        </div>
        <div className="leftSide">
          <h2>{title}</h2>
          <h3>{text}</h3>
          <p>
            {/* {language.map((lang, i) => (
              <i key={i}>{lang}&nbsp;</i>
            ))} */}
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
          <button>
            <a target="blank" href={READMElink}>
              READMore
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
