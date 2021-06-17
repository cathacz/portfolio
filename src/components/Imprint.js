import { FaCookieBite } from "react-icons/fa";

const Imprint = () => {
  return (
    <div className="imprint">
      <h2>Imprint</h2>
      <div className="row">
        {" "}
        <p>I am a&nbsp;</p>
        <span>
          <FaCookieBite />
        </span>
        <p> &nbsp;monster! </p>
      </div>{" "}
      <h6>... and I don't share ...</h6>
    </div>
  );
};

export default Imprint;
