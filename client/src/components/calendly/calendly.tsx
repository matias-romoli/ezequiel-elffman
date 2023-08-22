import {
  IoTodayOutline,
  IoReaderOutline,
  IoHourglassOutline,
  IoCheckmarkCircleOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";
import { PopupButton } from "react-calendly";
import { IoLogoWhatsapp } from "react-icons/io5";

function Calendly(props: any) {
  return (
    <>
      <div className="calendly-title">
        <h2> Coordinar reunión </h2>
      </div>
      <div className="calendly-body">
        <div className="calendly-pass">
          <div className="calendly-card">
            <IoReaderOutline className="calendly-icon" />
            <p> Completá el formulario. </p>
          </div>
          <div className="calendly-card">
            <IoTodayOutline className="calendly-icon" />
            <p> Elegí un día. </p>
          </div>
          <div className="calendly-card">
            <IoHourglassOutline className="calendly-icon" />
            <p> Elegí un horario. </p>
          </div>
          <div className="calendly-card">
            <IoCheckmarkCircleOutline className="calendly-icon" />
            <p> Cerrá reunión. </p>
          </div>
          <div className="calendly-btn">
            {props.db && !props.plan && (
              <PopupButton
                rootElement={document.getElementById("root") as HTMLElement}
                url="https://calendly.com/matiasromoli/30min"
                className="btn-calendly"
                text="Coordinar videollamada."
              />
            )}
            {props.db && props.plan && (
              <Link to="https://wa.link/2eadgo" className="btn-link">
                <div className="btn">
                  <div className="btn-logo">
                    <IoLogoWhatsapp className="logo" />
                  </div>
                  <p> ¡Coordinar vía WhatsApp! </p>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Calendly;
