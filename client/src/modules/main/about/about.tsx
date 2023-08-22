import { IoIosArrowDropupCircle } from "react-icons/io";
import Subtitle from "../../../components/subtitle";
import { paragraph } from "../../../utils/utils";
import { useState, useEffect } from "react";
import Aos from "aos";

function About() {
  const [upButton, setUpButton] = useState(false);
  function scrollUp() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1) {
        setUpButton(true);
      } else {
        setUpButton(false);
      }
    });
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Subtitle name="main-subtitle" id="about" paragraph="SOBRE MÍ" />
      <div className="main-about">
        <div className="main-about__card" data-aos="fade-up">
          <div className="main-about__card__paragraph">
            <h2> COMIENZOS </h2>
            <p>{paragraph.introduction}</p>
          </div>
          <div className="main-about__card__paragraph">
            <h2> VISIÓN </h2>
            <p>{paragraph.view}</p>
          </div>
          <div className="main-about__card__paragraph">
            <h2> OBJETIVOS </h2>
            <p>{paragraph.objective}</p>
          </div>
        </div>
        <div className="main-about__up">
            {upButton && (
              <span>
                <IoIosArrowDropupCircle
                  className="buttonUp"
                  onClick={() => scrollUp()}
                />
              </span>
            )}
          </div>
      </div>
    </>
  );
}

export default About;
