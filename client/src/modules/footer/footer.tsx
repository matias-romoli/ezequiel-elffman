import { IoLogoInstagram, IoLogoYoutube } from "react-icons/io5";
import Contact from "../../components/footer/contact";
import { Link } from "react-scroll";

function Footer() {
  return (
    <>
      <div className="contact-container">
        <div className="contact-me">
          <Contact />
        </div>
      </div>
      <div className="footer-container">
        <div className="footer-container__body">
          <div className="footer-container__logo">
            <img loading="lazy" src="/logo-write.png" alt="logo-blanco" />
          </div>
          <div className="footer-container__redes">
            <div className="footer-redes">
              <div className="redes__logo">
                <IoLogoInstagram className="logo-footer" />
                <IoLogoYoutube className="logo-footer" />
              </div>
            </div>
          </div>
          <div className="footer-container__menu">
            <Link smooth spy to="home">
              <p> Inicio </p>
            </Link>
            <Link smooth spy to="about">
              <p> Sobre mí </p>
            </Link>
            <Link smooth spy to="work">
              <p> Asesoria </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
