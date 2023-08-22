import { IoArrowForwardSharp, IoLogoWhatsapp, IoArrowDown } from "react-icons/io5";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <div className="contact">
        <IoLogoWhatsapp className="logo" />
        <p>¿Necesitas más información?</p>
        <IoArrowForwardSharp className="logo-right" />
        <IoArrowDown className='logo-below'/>
        <Link to="https://www.wa.link/uj9v4s">
          <button>¡Contactate conmigo!</button>
        </Link>
      </div>
    </>
  );
}

export default Contact;
