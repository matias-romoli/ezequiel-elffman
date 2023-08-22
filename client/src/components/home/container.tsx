import { Link } from "react-scroll";
import Button from "./button";

function Container() {
  return (
    <div className="main-container-logo__image">
      <img loading="lazy" src="./profile.png" alt="foto-perfil-personal-trainer" />
      <div className="main-container-logo__image__card">
        <div className="main-container-logo__paragraph">
          <p>
            ¡Hola, bienvenido a mi página! Soy <b>Ezequiel Elffman</b>,
            preparador físico personal. Te invito a conocer más y a comenzar
            juntos este nuevo proceso. Entrenamiento personalizado, plan
            alimenticio, seguimiento diario, entre otras cosas. <Link activeClass="active" smooth spy to="about">
             ¡Comencemos!
            </Link>
          </p>
        </div>
        <div className="main-container-logo__image__btn">
          <Button
            name="ME"
            ins={false}
            link="https://www.instagram.com/muskelenergi/"
          />
          <Button
            name=""
            ins={true}
            link="https://www.instagram.com/eze.elffman/"
          />
        </div>
      </div>
    </div>
  );
}

export default Container;
