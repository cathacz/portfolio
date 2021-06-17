import { FaCookieBite } from "react-icons/fa";

const Imprint = () => {
  return (
    <div className="imprint">
      <h2>Imprint</h2>
      <div className="row">
        {" "}
        <p>I am not a&nbsp;</p>
        <span>
          <FaCookieBite />
        </span>
        <p> &nbsp;monster!</p>
      </div>
    </div>
  );
};

export default Imprint;
