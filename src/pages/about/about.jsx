import React from "react";
import "./about.scss";
import adm from "../../assets/images/about/adm.jpg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useScrollTop } from "../../hooks/useScrollTop";

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

  return (
    <div className="about container">
      <Link className="home_page_link" to="/">
        {t("home")}
      </Link>
      <span> / {t("about")}</span>
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
    </div>
  );
};
