import { IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io5";
import { Link } from "react-router-dom";

function Icon(props: any) {
  return (
    <>
      {props.inst ? (
        <button>
          <Link to={props.uri}>
            <IoLogoInstagram className="logo" />
          </Link>
        </button>
      ) : (
        <button>
          <Link to={props.uri}>
            <IoLogoWhatsapp className="logo" />
          </Link>
        </button>
      )}
    </>
  );
}

export default Icon;
