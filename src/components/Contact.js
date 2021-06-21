import { GiMailbox } from "react-icons/gi";
import { SiGithub } from "react-icons/si";
const Contact = () => {
  return (
    <div>
      <h2>Let's get in touch</h2>
      <p>
        Feel free to write me{" "}
        <a href="mailto:catharinaczipf@hotmail.com">
          <GiMailbox />
        </a>
      </p>
      <p>
        OR visit my Github Account{" "}
        <a href="https://github.com/cathacz">
          <SiGithub />
        </a>
      </p>

      <h6>Don't forget to tell me what makes your heart beat faster</h6>
    </div>
  );
};

export default Contact;
