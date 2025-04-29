import React from "react";
import { newsData } from "../news/news-data";
import { useParams, Link } from "react-router-dom";
import { useScrollTop } from "../../hooks/useScrollTop";
import "./news-detail.scss";

export const NewsDetail = () => {
  useScrollTop(0);
  const params = useParams();
  const result = newsData.find((obj) => obj.id === Number(params.slug));

  return (
    <div className="news__detail__wrapper container">
      <div className="breadcrumb">
        <Link className="home_page_link" to="/">
          Bosh sahifa
        </Link>
        <span> / Yangiliklar</span>
      </div>
      <div className="news__detail__box">
        <div className="news__related">
          <h3 className="news__related__title">Boshqa yangiliklar</h3>
          <div className="news__related__list">
            {newsData.map((item) => (
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
          <p className="news__not-found">Yangilik topilmadi.</p>
        )}
      </div>
    </div>
  );
};
