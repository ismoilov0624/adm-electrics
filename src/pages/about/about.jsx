import React from "react";
import "./about.scss";
import overwievImg from "../../assets/images/about/overwiev-img.jpg";
import adm from "../../assets/images/about/adm.jpg";
import { Link } from "react-router-dom";

import { useScrollTop } from "../../hooks/useScrollTop";

export const About = () => {
  useScrollTop(0);
  const goals = [
    {
      number: "01",
      title: "Innovatsiyalarni tatbiq etish:",
      description:
        "Yangi texnologiyalarni joriy qilish orqali mahsulot sifatini oshirish va ishlab chiqarish jarayonlarini optimallashtirish.",
    },
    {
      number: "02",
      title: "Barqaror rivojlanish",
      description:
        "Tabiiy resurslarni tejamkorlik bilan ishlatish va ekologik xavfsizlikni ta’minlash orqali atrof-muhitga ijobiy ta’sir ko‘rsatish.",
    },
    {
      number: "03",
      title: "Mijozlar bilan ishlash",
      description:
        "Mijozlarning fikr-mulohazalarini tinglash va ular asosida mahsulotlarimizni doimiy ravishda takomillashtirish.",
    },
  ];
  return (
    <div className="about container">
      <Link className="home_page_link" to="/">
        Bosh sahifa
      </Link>
      / Kompaniya haqida
      <div className="overwiev">
        <h2 className="about__title">
          “ADM ELECTRICS” MChJ avtomobil sanoatiga mo’ljallangan sim o’rovlarini
          ishlab chiqarishga ixtisoslashgan kompaniya hisoblanadi.
        </h2>
        <div className="overwiev__wrapper">
          <div className="overwiev__box">
            <img className="overwiev__img" src={adm} alt="" />
          </div>
          <div className="overwiev__content">
            <p className="overwiev__text">
              Bizning mahsulotlarimiz “ADM Jizzakh” zavodida ishlab
              chiqariladigan KIA avtomobillarining tarkibiy qismidir. Bizning
              sim o’rovlari ilg’or texnologiyalar va qat’iy sifat standartlari
              asoasida ishlab chiqariladi. Bu har bir mahsulotning yuqori
              ishonchliligi va uzoq umir ko’rishini ta’minlaydi. <br /> Har bir
              sim o’rovlar xalqaro va sanoat xavfsizlik hamda sifat
              standartlariga javob berishini kafolatlaydi. <br /> Biz
              texnologiyalarimizni doimiy ravishda yangilash va
              takomillashtirish orqali mijozlarimizga eng yaxshisini taqdim
              etishga intilamiz. Asosiy qadriyatlarimiz javobgarlik, sifat va
              mijozlarga yo’naltirilganlikdir. <br /> Korxonamiz jamoasi yuqori
              malakali mutaxassislar to’plamidan iborat bo’lib, ular o’z bilim
              va ko’nikmalarini doimiy ravishda oshirib borishadi. Biz
              kompaniyamiz muvaffaqiyatining asosi hisoblanadigan
              xodimlarimizdan faxrlanamiz. Biz hamkorlikka ochiqmiz va
              mijozlarimizga faqat eng yaxshi mahsulot va xizmatlarni taklif
              qilishga har doim tayyormiz. Bizning mahsulotlarimiz “ADM Jizzakh”
              zavodida ishlab chiqariladigan KIA avtomobillarining tarkibiy
              qismidir. Bizning sim o’rovlari ilg’or texnologiyalar va qat’iy
              sifat standartlari asoasida ishlab chiqariladi. Bu har bir
              mahsulotning yuqori ishonchliligi va uzoq umir ko’rishini
              ta’minlaydi. <br /> Har bir sim o’rovlar xalqaro va sanoat
              xavfsizlik hamda sifat standartlariga javob berishini
              kafolatlaydi. <br /> Biz texnologiyalarimizni doimiy ravishda
              yangilash va takomillashtirish orqali mijozlarimizga eng
              yaxshisini taqdim etishga intilamiz. Asosiy qadriyatlarimiz
              javobgarlik, sifat va mijozlarga yo’naltirilganlikdir.
            </p>
          </div>
        </div>
      </div>
      <div className="goals container">
        <div className="goals__header">
          <h2 className="goals__title">Strategik maqsadlar</h2>
          <p className="goals__text">
            ADM Electrics kompaniyasining bosh maqsadi – innovatsion
            texnologiyalar va yuqori sifatli mahsulotlar orqali mijozlar
            ehtiyojlarini maksimal darajada qondirish. Biz avtomobil sanoati
            uchun zamonaviy va ishonchli sim o‘ramlarini ishlab chiqarishga
            ixtisoslashganmiz, bu esa xavfsizlik va samaradorlikni ta’minlashga
            qaratilgan.
          </p>
        </div>
        <div className="goals__list">
          {goals.map((goals, index) => (
            <div key={index} className="goals__item">
              <div className="goals__icon">{goals.number}</div>
              <div className="goals__content">
                <h3 className="goals__subtitle">{goals.title}</h3>
                <p className="goals__des">{goals.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
