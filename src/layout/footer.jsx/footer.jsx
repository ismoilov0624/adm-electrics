import React from "react";
import logo from "../../assets/images/home/logo.png";
import "./footer.scss";
import instagram from "../../assets/icons/footer/instagram.svg";
import facebook from "../../assets/icons/footer/facebook.svg";
import telegram from "../../assets/icons/footer/telegram.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="footer">
      <div className="footer__wrapper ">
        <div className="footer__info">
          <ul className="footer__details">
            <li className="footer__label">{t("footer.email")}</li>
            <p className="footer__text">info@adm-electrics.com</p>
          </ul>
          <ul className="footer__details">
            <li className="footer__label">{t("footer.phone")}</li>
            <p className="footer__text">+998 55 202 00 05</p>
          </ul>
          <ul className="footer__details">
            <li className="footer__label">{t("footer.address")}</li>
            <p className="footer__text">{t("footer.address1")}</p>
            <p className="footer__text">{t("footer.address2")}</p>
          </ul>
        </div>
        <div className="footer__center">
          <Link to="/">
            <img className="footer__logo" src={logo} alt="" />
          </Link>
          <p className="footer__description">{t("footer.socialMedia")}</p>

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
              <Link to="/" className="footer__link">
                {t("footer.links.home")}
              </Link>
            </li>
            <li>
              <Link to="/about" className="footer__link">
                {t("footer.links.about")}
              </Link>
            </li>
            <li>
              <Link to="/company_structure" className="footer__link">
                {t("footer.links.structure")}
              </Link>
            </li>
            <li>
              <Link to="/news" className="footer__link">
                {t("footer.links.news")}
              </Link>
            </li>
            <li>
              <a
                href="https://jobs.adm.uz/vacancies"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link"
              >
                {t("footer.links.career")}
              </a>
            </li>
            <li>
              <Link to="/contact" className="footer__link">
                {t("footer.links.contact")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom__content">
          <p className="footer__bottom__text">{t("footer.legalText")}</p>
          <p className="footer__bottom__text">{t("footer.rights")}</p>
        </div>
      </div>
    </div>
  );
};
