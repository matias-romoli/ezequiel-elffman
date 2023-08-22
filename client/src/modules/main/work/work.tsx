import Subtitle from "../../../components/subtitle";
import { cards } from "../../../utils/utils";
import Card from "../../../components/card";
import { useEffect } from "react";
import Aos from "aos";

function Work() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  return (
    <>
      <Subtitle name="main-subtitle" id="work" paragraph="ASESORÍA" />
      <Subtitle
        name="main-subtitle__work"
        paragraph="¿CÓMO Y DE QUÉ MANERA TRABAJAREMOS?"
      />
      <div className="main-work">
        <div className="main-work-cards" data-aos="fade-up">
          <Card
            isActive={true}
            image="gym.png"
            text={cards.gym.text}
            title={cards.gym.title}
            description="logo-gimnasio"
          />
          <Card
            isActive={true}
            image="statistics.png"
            text={cards.statistics.text}
            title={cards.statistics.title}
            description="logo-estadistica"
          />
          <Card
            isActive={true}
            image="food.png"
            text={cards.food.text}
            title={cards.food.title}
            description="logo-alimento"
          />
          <Card
            isActive={true}
            image="force.png"
            text={cards.force.text}
            description="logo-fuerza"
            title={cards.force.title}
          />
        </div>
      </div>
    </>
  );
}

export default Work;
