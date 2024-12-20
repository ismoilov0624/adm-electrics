import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import logo from "../../assets/images/home/logo.png";
import { useModal } from "../../hooks/useModal";
import { Modal } from "../../components/modal/modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import instagram from "../../assets/icons/footer/instagram.svg";
import facebook from "../../assets/icons/footer/facebook.svg";
import telegram from "../../assets/icons/footer/telegram.svg";

import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

const items = [
  {
    label: (
      <a className="dropdown__link" href="/about">
        Kompaniya haqida
      </a>
    ),
    key: "0",
  },
  {
    label: (
      <a className="dropdown__link" href="/company_structure">
        Korxona boshqaruvi
      </a>
    ),
    key: "1",
  },
  {
    label: (
      <a className="dropdown__link" href="/news">
        Yangiliklar
      </a>
    ),
    key: "2",
  },
];

export const Header = () => {
  const { close, isOpen, open } = useModal();
  return (
    <div className="header container">
      <Link to="/">
        <div className="header__logo">
          <img className="logo" src={logo} alt="Logo" />
        </div>
      </Link>
      <nav className="header__nav">
        <Link className="header__link" to="/">
          Bosh sahifa
        </Link>
        <Dropdown
          className="dropdown"
          menu={{
            items,
          }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <p className="header__link">Kompaniya haqida</p>
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
        <a
          className="header__link"
          href="https://jobs.adm.uz/vacancies?company=4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Karyera
        </a>
        <Link className="header__link" to="/contact">
          Kontaktlar
        </Link>
      </nav>

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
              <Link onClick={close} to="/">
                Bosh sahifa
              </Link>
            </li>
            <li className="menu-item">
              <Link onClick={close} to="/about">
                Kompaniya haqida
              </Link>
            </li>
            <li className="menu-item">
              <Link onClick={close} to="/company_structure">
                Korxona boshqaruvi
              </Link>
            </li>
            <li className="menu-item">
              <Link onClick={close} to="/news">
                Yangiliklar
              </Link>
            </li>
            <li className="menu-item">
              <a
                href="https://jobs.adm.uz/vacancies?company=4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Karyera
              </a>
            </li>
            <li className="menu-item">
              <Link onClick={close} to="/contact">
                Kontaktlar
              </Link>
            </li>
          </ul>
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
  );
};
