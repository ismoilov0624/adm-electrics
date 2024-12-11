import React from "react";
import Slider from "react-slick";
import "./commentSlider.scss";
import consumer from "../../../../assets/images/home/consumer.png";

export const CommentSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <div className="comments__header">
            <img className="comments__author-img" src={consumer} alt="" />
            <p className="comments__author">Aziz</p>
          </div>
          <p className="comments__text">
            “Juda yaxshi xizmat! Mijozlarga yondashuv juda professional. Mening
            barcha savollarimga tezda javob berildi. Tavsiya qilaman!”
          </p>
        </div>
        <div>
          <div className="comments__header">
            <img className="comments__author-img" src={consumer} alt="" />
            <p className="comments__author">Dildora</p>
          </div>
          <p className="comments__text">
            “Mahsulot ajoyib! Yangi texnologiyalarni o'z ichiga olgan va juda
            oson ishlatish mumkin. Hozirda ishlatib ko'rish uchun juda
            qiziqarli.”
          </p>
        </div>
        <div>
          <div className="comments__header">
            <img className="comments__author-img" src={consumer} alt="" />
            <p className="comments__author"> Jamshid </p>
          </div>
          <p className="comments__text">
            “Yana bir bor shuni ta'kidlashim kerakki, bu kompaniya o'z
            mijozlariga yuqori darajada xizmat ko'rsatadi. Yaqinda ularning
            xizmatidan foydalandim, va juda mamnunman.”
          </p>
        </div>
        <div>
          <div className="comments__header">
            <img className="comments__author-img" src={consumer} alt="" />
            <p className="comments__author">Nilufar </p>
          </div>
          <p className="comments__text">
            “Ajoyib xizmat, lekin faqat tezroq yetkazib berish kerak. Boshqa
            tomondan, mahsulot sifatiga gap yo'q, juda yaxshi!”
          </p>
        </div>
        <div>
          <div className="comments__header">
            <img className="comments__author-img" src={consumer} alt="" />
            <p className="comments__author">Sanjar </p>
          </div>
          <p className="comments__text">
            “Men bu kompaniyadan mahsulot sotib olishni boshladim va ko'plab
            do'stlarimni ham tavsiya qildim. Ularning mijozlarga yondashuvi juda
            professional.”
          </p>
        </div>
        <div>
          <div className="comments__header">
            <img className="comments__author-img" src={consumer} alt="" />
            <p className="comments__author">Mehriban </p>
          </div>
          <p className="comments__text">
            “Texnik yordam juda tez va samarali. Yuzaga kelgan muammoni qisqa
            vaqt ichida hal qilib berdi. Yana foydalanaman.”
          </p>
        </div>
        <div>
          <div className="comments__header">
            <img className="comments__author-img" src={consumer} alt="" />
            <p className="comments__author">Shahzod </p>
          </div>
          <p className="comments__text">
            “Shu kompaniya bilan ishlash juda yoqdi. Xizmat juda samimiy va
            mijozlarga do'stona munosabatda bo'lishadi. Barcha jarayonlar oson
            va tez amalga oshiriladi.”
          </p>
        </div>
        <div>
          <div className="comments__header">
            <img className="comments__author-img" src={consumer} alt="" />
            <p className="comments__author">Gulnora</p>
          </div>
          <p className="comments__text">
            “Texnik yordam juda tez va samarali. Yuzaga kelgan muammoni qisqa
            vaqt ichida hal qilib berdi. Yana foydalanaman.”
          </p>
        </div>
      </Slider>
    </div>
  );
};
