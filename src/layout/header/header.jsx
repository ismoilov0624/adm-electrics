import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./header.scss";
import logo from "../../assets/images/home/logo.png";
import { useModal } from "../../hooks/useModal";
import { Modal } from "../../components/modal/modal";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import instagram from "../../assets/icons/footer/instagram.svg";
import facebook from "../../assets/icons/footer/facebook.svg";
import telegram from "../../assets/icons/footer/telegram.svg";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Select } from "antd";

export const Header = () => {
  const { t, i18n } = useTranslation();
  const { close, isOpen, open } = useModal();
  const location = useLocation();

  const handleLanguageChange = (value) => {
    i18n.changeLanguage(value);
  };

  const isActive = (path) => location.pathname === path;

  const items = [
    {
      label: (
        <Link
          className={`dropdown__link ${isActive("/about") ? "active" : ""}`}
          to="/about"
        >
          {t("about")}
        </Link>
      ),
      key: "0",
    },
    {
      label: (
        <Link
          className={`dropdown__link ${
            isActive("/company_structure") ? "active" : ""
          }`}
          to="/company_structure"
        >
          {t("company_structure")}
        </Link>
      ),
      key: "1",
    },
    {
      label: (
        <Link
          className={`dropdown__link ${isActive("/news") ? "active" : ""}`}
          to="/news"
        >
          {t("news")}
        </Link>
      ),
      key: "2",
    },
  ];

  return (
    <div className="header__wrapper">
      <div className="header container">
        <Link to="/">
          <div className="header__logo">
            <img className="logo" src={logo} alt="Logo" />
          </div>
        </Link>

        <nav className="header__nav">
          <Link
            className={`header__link ${isActive("/") ? "active" : ""}`}
            to="/"
          >
            {t("home")}
          </Link>

          <Dropdown className="dropdown" menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <p
                  className={`header__link ${
                    ["/about", "/company_structure", "/news"].includes(
                      location.pathname
                    )
                      ? "active"
                      : ""
                  }`}
                >
                  {t("about")}
                </p>
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>

          <a
            className="header__link"
            href="https://jobs.adm.uz/vacancies"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("career")}
          </a>

          <Link
            className={`header__link ${isActive("/contact") ? "active" : ""}`}
            to="/contact"
          >
            {t("contact")}
          </Link>
        </nav>

        <Select
          defaultValue={i18n.language}
          onChange={handleLanguageChange}
          style={{ width: 60 }}
          options={[
            { value: "uz", label: "UZ" },
            { value: "ru", label: "RU" },
            { value: "en", label: "EN" },
          ]}
        />

        {/* Mobile menu */}
        <div className="menu-container">
          <button onClick={open} className="menu-button">
            <FontAwesomeIcon icon={faBars} />
          </button>

          <Modal close={close} isOpen={isOpen}>
            <div className="modal-header">
              <button onClick={close} className="close-button">
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <ul className="menu-list">
              <li className="menu-item">
                <Link
                  onClick={close}
                  className={isActive("/") ? "active" : ""}
                  to="/"
                >
                  {t("home")}
                </Link>
              </li>
              <li className="menu-item">
                <Link
                  onClick={close}
                  className={isActive("/about") ? "active" : ""}
                  to="/about"
                >
                  {t("about")}
                </Link>
              </li>
              <li className="menu-item">
                <Link
                  onClick={close}
                  className={isActive("/company_structure") ? "active" : ""}
                  to="/company_structure"
                >
                  {t("company_structure")}
                </Link>
              </li>
              <li className="menu-item">
                <Link
                  onClick={close}
                  className={isActive("/news") ? "active" : ""}
                  to="/news"
                >
                  {t("news")}
                </Link>
              </li>
              <li className="menu-item">
                <a
                  href="https://jobs.adm.uz/vacancies"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("career")}
                </a>
              </li>
              <li className="menu-item">
                <Link
                  onClick={close}
                  className={isActive("/contact") ? "active" : ""}
                  to="/contact"
                >
                  {t("contact")}
                </Link>
              </li>
            </ul>

            <div className="contact-info-header">
              <div className="contact-item-header">
                <FontAwesomeIcon icon={faEnvelope} />
                <span>info@adm-electrics.com</span>
              </div>
              <div className="contact-item-header">
                <FontAwesomeIcon icon={faPhone} />
                <span>+998 55 202 00 05</span>
              </div>
              <div className="contact-item-header">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span>{t("address")}</span>
              </div>
            </div>

            <div className="header__socials">
              <a
                className="header__badge"
                href="https://www.facebook.com/admelectrics.uz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebook} alt="Facebook" />
              </a>
              <a
                className="header__badge"
                href="https://www.facebook.com/admelectrics.uz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagram} alt="Instagram" />
              </a>
              <a
                className="header__badge"
                href="https://t.me/ADM_ELECTRICS_Jobs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={telegram} alt="Telegram" />
              </a>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};
