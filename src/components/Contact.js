import { GiMailbox } from "react-icons/gi";
import { SiGithub } from "react-icons/si";
import { MdPhotoCamera } from "react-icons/md";
const Contact = () => {
  return (
    <div>
      <h2>Let's get in touch</h2>
      <p>
        Feel free to write me{" "}
        <a className="toolTipContact" href="mailto:catharinaczipf@hotmail.com">
          <GiMailbox />{" "}
          <span className="tTtextContact">
            Don't forget to tell me what makes your heart beat faster
          </span>
        </a>{" "}
      </p>
      <p>
        OR <br></br>visit my Github Account{" "}
        <a href="https://github.com/cathacz" target="blank">
          <SiGithub />
        </a>
      </p>
      <p>
        OR <br></br>see some of my artsy stuff{" "}
        <a href="https://oesigoesossi.wixsite.com/catha" target="blank">
          <MdPhotoCamera />
        </a>
      </p>

      <h6></h6>
    </div>
  );
};

export default Contact;
