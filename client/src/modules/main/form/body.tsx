import Calendly from "../../../components/calendly/calendly";
import { IoCheckmarkOutline } from "react-icons/io5";
import Input from "../../../components/form/input";
import { useEffect } from "react";
import Aos from "aos";

function Body(props: any) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  return (
    <div className="form-container" data-aos="fade-up">
      <form onSubmit={props.onSubmit} className="form-container__body">
        <div className="form-title">
          <h2> ¡Completá los campos y coordiná una reunión! </h2>
        </div>
        <div className="form-container-input">
          <div className="main-input">
            <Input
              type="text"
              name="nombre"
              label="Nombre"
              change={props.onChange}
              value={props.user.nombre}
              placeholder="Por favor, ingrese su nombre."
            />
            <Input
              type="text"
              name="apellido"
              label="Apellido"
              change={props.onChange}
              value={props.user.apellido}
              placeholder="Por favor, ingrese su apellido."
            />
          </div>
          <div className="main-input">
            <Input
              type="text"
              name="email"
              label="Email"
              change={props.onChange}
              value={props.user.email}
              placeholder="Por favor, ingrese su email."
            />
            <div className="select-input">
              <select
                onChange={props.onChange}
                defaultValue={props.value}
                name="plan"
              >
                <option value="default" disabled hidden>
                  Por favor, ingrese una opción.
                </option>
                <option value="M.E: Entrenamiento-funcional">
                  M.E: Entrenamiento funcional.
                </option>
                <option value="M.E: Personalizado">M.E: Personalizado.</option>
                <option value="M.E: Personalizado-deportistas">
                  M.E: Personalizado: Deportistas.
                </option>
                <option value="Personalizado">Personalizado</option>
                <option value="Personalizado-deportistas">
                  Personalizado: Deportistas
                </option>
              </select>
              <label> Plan </label>
            </div>
          </div>
          <div className="form-container-button">
            <div className="input-response">
              <p> {props.err} </p>
            </div>
            {props.loading ? (
              <div className="form-button">
                <button className="btn-loader">
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            ) : (
              <div className="form-button">
                {props.db ? (
                  <button className="btn-checked" disabled={true}>
                    <IoCheckmarkOutline className="button-check" />
                  </button>
                ) : (
                  <button> Enviar </button>
                )}
              </div>
            )}
          </div>
        </div>
      </form>
      <div className="calendly">
        <Calendly db={props.db} plan={props.plan} />
      </div>
    </div>
  );
}

export default Body;
