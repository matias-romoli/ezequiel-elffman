import Navbar from "../../components/header/navbar";
import { IoMdMenu } from "react-icons/io";

function Header({ isActive, setIsActive }: any) {
  function buttonResponsive(): boolean {
    return setIsActive(!isActive);
  }
  return (
    <header className="header-container" id="home">
      <Navbar isActive={isActive} setIsActive={setIsActive} />
      <IoMdMenu className="display-none" onClick={buttonResponsive} />
    </header>
  );
}

export default Header;
