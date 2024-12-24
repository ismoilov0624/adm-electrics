import React from "react";
import { HomeBanner } from "./components/banner/home-banner";
import slider2 from "../../assets/images/home/slider2.jpg";
import "./home.scss";
import { CommentSlider } from "./components/commentSlider/commentSlider";

import { NewsBanner } from "../news/components/banner/news-banner";
import { NewsCard } from "../news/components/card/news-card";
import { Link } from "react-router-dom";
import { newsData } from "../news/news-data";

export const Home = () => {
  return (
    <div className="home">
      <HomeBanner />

      <div className="about_company container">
        <div className="about_company__imgbox">
          <img
            className="about_company__img"
            src={slider2}
            alt="Company Overview"
          />
        </div>
        <div className="about_company__content">
          <h2 className="about_company__title">“ADM ELECTRICS” MChJ</h2>
          <p className="about_company__text">
            “ADM ELECTRICS” quyidagi yo‘nalishlarda faoliyat yuritadi:
          </p>
          <ul className="about_company__list">
            <li>
              Avtotransport vositalari uchun butlovchi qismlar: elektr
              komponentlar va HVAC tizimi uchun komponentlar ishlab chiqarish;
            </li>
            <li>
              Kesish, germetizatsiyalash, siqish, yig‘ish va sinovdan o‘tkazish
              jarayonlarini mahalliylashtirish;
            </li>
            <li>
              Mahalliy va xorijiy bozorlarga yuqori sifatli mahsulotlar yetkazib
              berish.
            </li>
          </ul>
          <p className="about_company__text">
            Korxona 2023-yilda tashkil etilgan bo‘lib, Andijon viloyatining
            Asaka shahridagi 1,4 gektar yer maydonida joylashgan. Ehtiyot
            qismlarni seriyaviy ishlab chiqarishning boshlanishi – 2024-yilning
            15-apreldan belgilangan.
          </p>
        </div>
      </div>

      <div className="comments container">
        <h2 className="comments__title">Mahsulotlar</h2>

        <CommentSlider />

        <div className="news_section">
          <h2 className="comments__title">Yangiliklar</h2>
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
                    Batafsil
                  </Link>
                </NewsCard>
              ))}
            </NewsBanner>
          </div>
          <Link className="news_link" to="news">
            Barcha yangiliklar
          </Link>
        </div>
      </div>
    </div>
  );
};
