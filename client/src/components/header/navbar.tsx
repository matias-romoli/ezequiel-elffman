import { Link } from "react-scroll";
import { Fragment } from "react";
import Li from "./li";

function Navbar({ isActive, setIsActive }: any) {
  const closeNavbarResponsive = () => {
    setIsActive(!setIsActive);
  };

  return (
    <Fragment>
      <div className="header-container__image">
        <Link to="/" style={{ display: "flex" }}>
          <img loading="lazy" src="/logo-write.png" alt="logo-marca" />
        </Link>
        <div className="header-container__text">
          <p className="text"> ENTRENADOR PERSONAL </p>
          <p className="text"> EZEQUIEL ELFFMAN </p>
        </div>
      </div>
      <nav
        className={isActive ? "header-nav__active" : "header-container__nav"}
      >
        <ul className="header-container__ul">
          <Li name="INICIO" id="home" active={setIsActive} />
          <Li name="SOBRE MÍ" id="about" active={setIsActive} />
          <Li name="ASESORÍA" id="work" active={setIsActive} />
          <div className="header-container__button">
            <button className="header-button">
              <Link
                to="form"
                smooth
                spy
                style={{ display: "flex" }}
                onClick={closeNavbarResponsive}
              >
                CONTACTAME
              </Link>
            </button>
          </div>
        </ul>
      </nav>
    </Fragment>
  );
}
export default Navbar;
