import { IoLogoInstagram } from "react-icons/io5";
import { Link } from "react-router-dom";

function Button(props: any) {
  return (
    <>
      {props.ins ? (
        <button>
          <Link className="main-link" to={props.link}>
            <IoLogoInstagram className="logo-instagram" />
          </Link>
        </button>
      ) : (
        <button>
          <Link className="main-link" to={props.link}>
            <img src="/me.png" alt="logo-muskel-energi"/>
          </Link>
        </button>
      )}
    </>
  );
}

export default Button;
