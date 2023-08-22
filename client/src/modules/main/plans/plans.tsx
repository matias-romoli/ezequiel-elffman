import Subtitle from "../../../components/subtitle";
import Card from "../../../components/card";
import { useEffect } from "react";
import Aos from "aos";

function Plans() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  return (
    <>
      <Subtitle
        name="main-subtitle__plans"
        paragraph="MIRÁ LOS PLANES QUE TENGO PARA VOS"
      />
      <div className="main-plans">
        <div className="main-plans-cards" data-aos="fade-up">
          <Card isActive={false} />
        </div>
      </div>
    </>
  );
}

export default Plans;
