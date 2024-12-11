import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./news-card.scss";

export const NewsCard = ({ img, title, text, children }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="news__card" data-aos="fade-up">
      <img className="news__img" src={img} alt="" />
      <h3 className="news__subtitle">{title}</h3>
      <p className="news__text">{text}</p>
      {children && <div className="news__button-wrapper">{children}</div>}
    </div>
  );
};
