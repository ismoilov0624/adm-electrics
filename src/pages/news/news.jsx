import React from "react";
import "./news.scss";
import { Link } from "react-router-dom";
import { NewsBanner } from "./components/banner/news-banner";
// import { newsData } from "./news-data";
import { NewsCard } from "./components/card/news-card";
import { useScrollTop } from "../../hooks/useScrollTop";

import { newsDataUz, newsDataRu, newsDataEn } from "./news-data";
import { useTranslation } from "react-i18next";

export const News = () => {
  useScrollTop(0);
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const newsData =
    lang === "ru" ? newsDataRu : lang === "en" ? newsDataEn : newsDataUz;

  return (
    <div className="news container">
      <Link className="home_page_link" to="/">
        {lang === "ru" ? "Главная" : lang === "en" ? "Home" : "Bosh sahifa"}
      </Link>
      <span>
        {" "}
        / {lang === "ru" ? "Новости" : lang === "en" ? "News" : "Yangiliklar"}
      </span>
      <h2 className="news__title">
        {lang === "ru" ? "Новости" : lang === "en" ? "News" : "Yangiliklar"}
      </h2>
      <NewsBanner>
        {newsData.map((item) => (
          <NewsCard
            key={item.id}
            img={item.img}
            title={item.title}
            text={item.text}
          >
            <Link to={`news-detail/${item.id}`} className="news__button">
              {lang === "ru"
                ? "Подробнее"
                : lang === "en"
                ? "Read More"
                : "Batafsil"}
            </Link>
          </NewsCard>
        ))}
      </NewsBanner>
    </div>
  );
};
