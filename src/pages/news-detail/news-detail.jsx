import React from "react";
import { newsDataUz, newsDataRu, newsDataEn } from "../news/news-data";
import { useParams, Link } from "react-router-dom";
import { useScrollTop } from "../../hooks/useScrollTop";
import { useTranslation } from "react-i18next";
import "./news-detail.scss";

export const NewsDetail = () => {
  useScrollTop(0);
  const { t, i18n } = useTranslation();
  const lang = i18n.language.split("-")[0]; // ex: "uz", "ru", "en"

  // Tilga mos yangiliklar massivi tanlanadi
  let newsData;
  if (lang === "uz") {
    newsData = newsDataUz;
  } else if (lang === "ru") {
    newsData = newsDataRu;
  } else {
    newsData = newsDataEn;
  }

  const { slug } = useParams();
  const result = newsData.find((obj) => obj.id === Number(slug));

  return (
    <div className="news__detail__wrapper container">
      <div className="breadcrumb">
        <Link className="home_page_link" to="/">
          {t("home")}
        </Link>
        <span> / {t("newsTitle")}</span>
      </div>
      <div className="news__detail__box">
        <div className="news__related">
          <h3 className="news__related__title">{t("otherNews")}</h3>
          <div className="news__related__list">
            {newsData
              .filter((item) => item.id !== Number(slug))
              .map((item) => (
                <Link
                  key={item.id}
                  to={`/news-detail/${item.id}`}
                  className="news__related__item"
                >
                  <div className="news__related__card">
                    <h4 className="news__related__subtitle">{item.title}</h4>
                  </div>
                </Link>
              ))}
          </div>
        </div>

        {result ? (
          <div className="news__detail">
            <h2 className="news__detail__title">{result.title}</h2>
            <img
              className="news__detail__img"
              src={result.img}
              alt={result.title}
            />
            <p className="news__detail__text">{result.text}</p>
          </div>
        ) : (
          <p className="news__not-found">{t("newsNotFound")}</p>
        )}
      </div>
    </div>
  );
};
