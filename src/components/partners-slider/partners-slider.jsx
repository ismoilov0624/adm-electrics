// src/components/PartnersSlider.jsx
import React from "react";
import Slider from "react-slick";
import "./partners-slider.scss";

// Import all partner images
import kyungshin from "../../assets/images/about/Kyungshin.jpg";
import emdep from "../../assets/images/about/emdep.png";
import infac from "../../assets/images/about/infac.jpg";
import autoware from "../../assets/images/about/autoware.png";
import doowon from "../../assets/images/about/doowon.jpg";
import ap from "../../assets/images/about/ap.png";
import ket from "../../assets/images/about/ket.webp";
import inzi from "../../assets/images/about/inzi.jpg";

const partners = [kyungshin, emdep, infac, autoware, doowon, ap, inzi, ket];

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 3 } },
    { breakpoint: 768, settings: { slidesToShow: 2 } },
    { breakpoint: 480, settings: { slidesToShow: 1 } },
  ],
};

export const PartnersSlider = ({ title }) => {
  return (
    <div className="partners container">
      {title && <h2 className="partners__title">{title}</h2>}
      <Slider {...sliderSettings}>
        {partners.map((logo, i) => (
          <div className="partner__slide" key={i}>
            <img src={logo} alt={`partner-${i}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
