import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      {/* <Link to="/">
        <li>C</li>
      </Link> */}
      <ul>
        <Link to="/about">
          <li>About Me</li>
        </Link>
        <Link to="/projects">
          <li>Projects</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Menu;
