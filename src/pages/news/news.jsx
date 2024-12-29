import React from "react";
import "./news.scss";
import { Link } from "react-router-dom";
import { NewsBanner } from "./components/banner/news-banner";
import { newsData } from "./news-data";
import { NewsCard } from "./components/card/news-card";

import { useScrollTop } from "../../hooks/useScrollTop";

export const News = () => {
  useScrollTop(0);
  return (
    <div className="news container">
      <Link className="home_page_link" to="/">
        Bosh sahifa
      </Link>
      / Yangiliklar
      <h2 className="news__title">Yangiliklar</h2>
      <NewsBanner>
        {newsData.map((item) => (
          <NewsCard
            key={item.id}
            img={item.img}
            title={item.title}
            text={item.text}
          >
            <Link to={`news-detail/${item.id}`} className="news__button">
              Batafsil
            </Link>
          </NewsCard>
        ))}
      </NewsBanner>
    </div>
  );
};
