import Container from "../../components/home/container";
import Logo from "../../components/home/logo";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

function Home() {
  useEffect(() => {
    Aos.init();
  });

  return (
    <main className="main-container">
      <Logo />
      <Container />
    </main>
  );
}

export default Home;
