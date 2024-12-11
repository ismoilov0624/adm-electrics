import slider1 from "../../../../assets/images/home/slider1.jpg";
import slider2 from "../../../../assets/images/home/slider2.jpg";
import slider3 from "../../../../assets/images/home/slider3.jpg";
import React from "react";
import Slider from "react-slick";
import "./home-banner.scss";

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
  infinte: true,
  speed: 500,
  slideToShow: 1,
  autoplay: true,
  slideToScroll: 1,
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
          <img src={slider1} alt="" />
        </div>
        <div className="slider__box">
          <img src={slider3} alt="" />
        </div>
      </Slider>
    </div>
  );
};
