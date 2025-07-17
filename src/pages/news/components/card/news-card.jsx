import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./news-card.scss";

export const NewsCard = ({ img, title, text, children }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const getTruncatedHTML = (htmlString, maxLength) => {
    const tempElement = document.createElement("div");
    tempElement.innerHTML = htmlString;
    const plainText = tempElement.textContent || tempElement.innerText || "";

    if (plainText.length > maxLength) {
      return plainText.slice(0, maxLength) + "...";
    }
    return plainText;
  };

  return (
    <div className="news__card" data-aos="fade-up">
      <img className="news__img" src={img} alt={title} />
      <h3 className="news__subtitle">{title}</h3>
      <p className="news__text">
        {typeof text === "string" && text.includes("<")
          ? getTruncatedHTML(text, 150)
          : text.length > 150
          ? text.slice(0, 150) + "..."
          : text}
      </p>
      {children && <div className="news__button-wrapper">{children}</div>}
    </div>
  );
};
