import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/projects">
        <li>Projects</li>
      </Link>
      <Link to="/about">
        <li>AboutMe</li>
      </Link>
    </nav>
  );
};

export default Menu;
