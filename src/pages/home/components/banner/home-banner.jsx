import React from "react";
import Slider from "react-slick";
import "./home-banner.scss";
import vid1 from "../../../../assets/video/vid1.mp4";
import vid2 from "../../../../assets/video/vid2.mp4";
import vid3 from "../../../../assets/video/vid3.mp4";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "38px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        left: "38px",
        zIndex: "49",
        color: "red",
      }}
      onClick={onClick}
    />
  );
}

const settings = {
  dots: false,
  infinite: true,
  speed: 500, // Slide transition speed in ms
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 10000, // Time between slides in ms (10 seconds)
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const HomeBanner = () => {
  return (
    <div className="home__banner">
      <Slider className="slider" {...settings}>
        <div className="slider__box">
          <video autoPlay muted loop className="slider__video">
            <source src={vid1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="slider__box">
          <video autoPlay muted loop className="slider__video">
            <source src={vid2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="slider__box">
          <video autoPlay muted loop className="slider__video">
            <source src={vid3} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </Slider>
    </div>
  );
};
