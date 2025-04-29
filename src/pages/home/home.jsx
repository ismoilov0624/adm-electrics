import React from "react";
import { HomeBanner } from "./components/banner/home-banner";
import slider2 from "../../assets/images/home/slider2.jpeg";
import "./home.scss";
import { CommentSlider } from "./components/commentSlider/commentSlider";

import { NewsBanner } from "../news/components/banner/news-banner";
import { NewsCard } from "../news/components/card/news-card";
import { Link } from "react-router-dom";
import { newsData } from "../news/news-data";

import { useScrollTop } from "../../hooks/useScrollTop";

import { useTranslation } from "react-i18next";

export const Home = () => {
  const { t } = useTranslation();

  useScrollTop(0);

  return (
    <div className="home">
      <HomeBanner />

      <div className="about_company container">
        <div className="about_company__imgbox">
          <img
            className="about_company__img"
            src={slider2}
            alt={t("aboutCompanyAlt")}
          />
        </div>
        <div className="about_company__content">
          <h2 className="about_company__title">{t("aboutCompanyTitle")}</h2>
          <p className="about_company__text">{t("aboutCompanyText")}</p>
          <ul className="about_company__list">
            <li>{t("companyProduct1")}</li>
            <li>{t("companyProduct2")}</li>
            <li>{t("companyProduct3")}</li>
          </ul>
          <p className="about_company__text">{t("aboutCompanyDetails")}</p>
        </div>
      </div>

      <div className="comments container">
        <h2 className="comments__title">{t("productsTitle")}</h2>

        <CommentSlider />

        <div className="news_section">
          <h2 className="comments__title">{t("newsTitle")}</h2>
          <div className="news_section__content">
            <NewsBanner>
              {newsData.slice(0, 4).map((item) => (
                <NewsCard
                  key={item.id}
                  img={item.img}
                  title={item.title}
                  text={item.text}
                >
                  <Link to={`news-detail/${item.id}`} className="news__button">
                    {t("readMore")}
                  </Link>
                </NewsCard>
              ))}
            </NewsBanner>
          </div>
          <Link className="news_link" to="/news">
            {t("allNews")}
          </Link>
        </div>
      </div>
    </div>
  );
};
