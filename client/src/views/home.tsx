import About from "../modules/main/about/about";
import Plans from "../modules/main/plans/plans";
import Header from "../modules/header/header";
import Footer from "../modules/footer/footer";
import Work from "../modules/main/work/work";
import Form from "../modules/main/form/form";
import Main from "../modules/home/home";
import { useState } from "react";

function Home(): JSX.Element {
  const [isActive, setIsActive] = useState<Boolean>(false);

  return (
    <>
      <Header isActive={isActive} setIsActive={setIsActive} />
      <Main />
      <About />
      <Work />
      <Plans />
      <Form />
      <Footer />
    </>
  );
}

export default Home;
