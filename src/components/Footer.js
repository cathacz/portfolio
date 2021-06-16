import { GiHeartOrgan } from "react-icons/gi";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      {" "}
      <h6>Made with my blood, sweat & tears </h6>
      <Link to="/imprint">
        <h5>Imprint</h5>
        {/* <li>About Me</li> */}
      </Link>
      <br></br>
      <a
        className="beating"
        href="https://www.youtube.com/watch?v=0obBdrfUMzU"
        target="blank"
      >
        <GiHeartOrgan />
      </a>
    </div>
  );
};

export default Footer;
