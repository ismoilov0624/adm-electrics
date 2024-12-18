import React from "react";
import logo from "../../assets/images/home/logo.png";
import "./footer.scss";
import instagram from "../../assets/icons/footer/instagram.svg";
import facebook from "../../assets/icons/footer/facebook.svg";
import telegram from "../../assets/icons/footer/telegram.svg";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__wrapper ">
        <div className="footer__info">
          <p className="footer__title">Biz bilan bog'laning</p>
          <ul className="footer__details">
            <li className="footer__label">Email</li>
            <p className="footer__text">info@adm-electrics.com</p>
          </ul>
          <ul className="footer__details">
            <li className="footer__label">Telefon</li>
            <p className="footer__text">+998 55 202 00 05</p>
          </ul>
          <ul className="footer__details">
            <li className="footer__label">Manzil</li>
            <p className="footer__text">Asaka tumani Kamolot MFY</p>
            <p className="footer__text">Marg'iloniy ko`chasi, 65-uy</p>
          </ul>
        </div>
        <div className="footer__center">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <p className="footer__description">Ijtimoy tarmoqlar</p>

          <div className="footer__socials">
            <a
              className="footer__badge"
              href="https://www.facebook.com/admelectrics.uz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="Facebook" />
            </a>
            <a
              className="footer__badge"
              href="https://www.facebook.com/admelectrics.uz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="Instagram" />
            </a>
            <a
              className="footer__badge"
              href="https://t.me/ADM_ELECTRICS_Jobs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={telegram} alt="Telegram" />
            </a>
          </div>
        </div>
        <div className="footer__utility">
          <ul className="footer__links">
            <li>
              <Link to="/">Bosh sahifa</Link>
            </li>
            <li>
              <Link to="/about">Kompaniya haqida</Link>
            </li>
            <li>
              <Link to="/company_structure">Korxona boshqaruvi</Link>
            </li>
            <li>
              <Link to="/news">Yangiliklar</Link>
            </li>
            <li>
              <a
                href="https://jobs.adm.uz/vacancies?company=4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Karyera
              </a>
            </li>
            <li>
              <Link to="/contact">Kontaktlar</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom__content">
          <p className="footer__bottom__text">
            ADM ELECTRICS O‘zbekiston Respublikasi hududida o‘z faoliyatini
            O‘zbekiston Respublikasi qonunchiligiga muvofiq amalga oshiradi.
          </p>
          <p className="footer__bottom__text">
            ©2024 Adm Electrics | Barcha huquqlar himoyalangan.
          </p>
        </div>
      </div>
    </div>
  );
};
