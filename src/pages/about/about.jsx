import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useScrollTop } from "../../hooks/useScrollTop";
import "./about.scss";
import adm from "../../assets/images/about/adm.jpg";

import kyungshin from "../../assets/images/about/Kyungshin.jpg";
import emdep from "../../assets/images/about/emdep.png";
import infac from "../../assets/images/about/infac.jpg";
import autoware from "../../assets/images/about/autoware.png";
import doowon from "../../assets/images/about/doowon.jpg";
import ap from "../../assets/images/about/ap.png";
import ket from "../../assets/images/about/ket.webp";
import inzi from "../../assets/images/about/inzi.jpg";

export const About = () => {
  useScrollTop(0);
  const { t } = useTranslation();

  const goals = [
    {
      number: "01",
      title: t("goal1_title"),
      description: t("goal1_desc"),
    },
    {
      number: "02",
      title: t("goal2_title"),
      description: t("goal2_desc"),
    },
    {
      number: "03",
      title: t("goal3_title"),
      description: t("goal3_desc"),
    },
  ];

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

  return (
    <div className="about container">
      <Link className="home_page_link" to="/">
        {t("home")}
      </Link>
      <span> / {t("about")}</span>

      {/* Overview */}
      <div className="overwiev">
        <h2 className="about__title">{t("aboutCompanyTitleFull")}</h2>
        <div className="overwiev__wrapper">
          <div className="overwiev__box">
            <img
              className="overwiev__img"
              src={adm}
              alt={t("aboutCompanyAlt")}
            />
          </div>
          <div className="overwiev__content">
            <p className="overwiev__text">{t("aboutCompanyFullText")}</p>
          </div>
        </div>
      </div>

      {/* Goals */}
      <div className="goals container">
        <div className="goals__header">
          <h2 className="goals__title">{t("strategicGoalsTitle")}</h2>
          <p className="goals__text">{t("strategicGoalsText")}</p>
        </div>
        <div className="goals__list">
          {goals.map((goal, index) => (
            <div key={index} className="goals__item">
              <div className="goals__icon">{goal.number}</div>
              <div className="goals__content">
                <h3 className="goals__subtitle">{goal.title}</h3>
                <p className="goals__des">{goal.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="partners">
        <h2 className="partners__title">{t("ourPartners")}</h2>
        <Slider {...sliderSettings}>
          {partners.map((logo, i) => (
            <div className="partner__slide" key={i}>
              <img src={logo} alt={`partner-${i}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
