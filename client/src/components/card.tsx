import { IoCheckmarkDoneSharp, IoLocationOutline } from "react-icons/io5";
import { settings, data } from "../utils/utils";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Link } from "react-scroll";
import Slider from "react-slick";

function Card(props: any) {
  return (
    <>
      {props.isActive ? (
        <div className="work-container__card">
          <div className="work-container__image">
            <img
              loading="lazy"
              src={"/card/" + props.image}
              alt={props.description}
            />
          </div>
          <div className="work-container__text">
            <h2> {props.title} </h2>
            <div className="work-container-text__p">
              <p> {props.text} </p>
            </div>
          </div>
        </div>
      ) : (
        <Slider {...settings} className="slider">
          {data.map((item) => (
            <div
              className={item.sport ? "slider-sport" : "slider-card"}
              key={item.id}
            >
              <div className="plans-container-data__title">
                <h2> {item.title} </h2>
                <div className="plans-container-data__location">
                  <IoLocationOutline className="logo-location" />
                  <p> {item.location}</p>
                </div>
                <div className="plans-container-data__description">
                  <p> {item.description}</p>
                </div>
              </div>
              <div className="plans-container-price">
                <div className="plans-container-arg">
                  <p>
                    AR$ <b>{item.price.local}</b> /mes
                  </p>
                  {item.price.international && (
                    <p>
                      USD <b>{item.price.international}</b> /mes
                    </p>
                  )}
                </div>
                <button>
                  <Link
                    activeClass="active"
                    smooth
                    spy
                    to="form"
                    className="flex"
                  >
                    ¡Comenzá ahora!
                  </Link>
                </button>
              </div>
              <div className="plans-container-description">
                <div className="description__paragraph">
                  <IoCheckmarkDoneSharp className="check" />
                  <p> {item.point?.one} </p>
                </div>
                <div className="description__paragraph">
                  <IoCheckmarkDoneSharp className="check" />
                  <p>{item.point?.two}</p>
                </div>
                <div className="description__paragraph">
                  <IoCheckmarkDoneSharp className="check" />
                  <p>{item.point?.three}</p>
                </div>
                <div className="description__paragraph">
                  <IoCheckmarkDoneSharp className="check" />
                  <p>{item.point?.four}</p>
                </div>
                <div className="description__paragraph">
                  <IoCheckmarkDoneSharp className="check" />
                  <p>{item.point?.five}</p>
                </div>
                {item.point?.six && (
                  <div className="description__paragraph">
                    <IoCheckmarkDoneSharp className="check" />
                    <p>{item.point?.six}</p>
                  </div>
                )}
                {item.point?.seven && (
                  <div className="description__paragraph">
                    <IoCheckmarkDoneSharp className="check" />
                    <p>{item.point?.seven}</p>
                  </div>
                )}
                {item.point?.eight && (
                  <div className="description__paragraph">
                    <IoCheckmarkDoneSharp className="check" />
                    <p>{item.point?.eight}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </Slider>
      )}
    </>
  );
}

export default Card;
