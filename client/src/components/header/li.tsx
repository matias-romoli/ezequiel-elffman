import { Link } from "react-scroll";

function Li(props:any) {
  const closeNavbar = () => {
    props.active(!props.active);
  };
  return (
    <li>
      <Link
        activeClass="active"
        smooth
        spy
        to={props.id}
        className="link-li"
        onClick={closeNavbar}
      >
        {props.name}
      </Link>
    </li>
  );
}

export default Li;
