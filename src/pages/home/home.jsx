import React from "react";
import { HomeBanner } from "./components/banner/home-banner";
import slider2 from "../../assets/images/home/slider2.jpg";
import "./home.scss";
import { CommentSlider } from "./components/commentSlider/commentSlider";

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
        <h2 className="comments__title">Izohlar</h2>
        {/* <ul className="comments__list">
          <li className="comments__item">
            <div className="comments__header">
              <p className="comments__author">John</p>
            </div>
            <p className="comments__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
              sed ex quos aut quisquam. Velit exercitationem magni possimus
              voluptates amet pariatur culpa natus nesciunt maiores,
              consequuntur nobis repellendus nemo cumque.
            </p>
          </li>
          <li className="comments__item">
            <div className="comments__header">
              <p className="comments__author">Doe</p>
            </div>
            <p className="comments__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
              sed ex quos aut quisquam. Velit exercitationem magni possimus
              voluptates amet pariatur culpa natus nesciunt maiores,
              consequuntur nobis repellendus nemo cumque.
            </p>
          </li>
        </ul> */}
        <CommentSlider />
      </div>
    </div>
  );
};
