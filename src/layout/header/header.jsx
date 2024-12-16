import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import logo from "../../assets/images/home/logo.png";
import { useModal } from "../../hooks/useModal"; // Corrected import path.
import { Modal } from "../../components/modal/modal";
import { BurgerMenu } from "../../assets/icons/footer/burger-menu";

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
        Tashkiliy tuzilma
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
        {/* <a className="header__link" href="tel:+998552020005">
          +998 55 202 00 05
        </a> */}
      </nav>

      <div className="menu-container">
        <button onClick={open} className="menu-button">
          =
        </button>

        <Modal close={close} isOpen={isOpen}>
          <div className="modal-header">
            <button onClick={close} className="close-button">
              x
            </button>
          </div>
          <ul className="menu-list">
            <li className="menu-item">
              <Link className="header__link" to="/">
                Bosh sahifa
              </Link>
            </li>
            <li className="menu-item">
              <Link className="header__link" to="/about">
                Kompaniya haqida
              </Link>
            </li>
            <li className="menu-item">
              <Link className="header__link" to="/company_structure">
                Tashkiliy tuzilma
              </Link>
            </li>
            <li className="menu-item">
              <Link className="header__link" to="/news">
                Yangiliklar
              </Link>
            </li>
            <li className="menu-item">
              <a
                className="header__link"
                href="https://jobs.adm.uz/vacancies?company=4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Karyera
              </a>
            </li>
            <li className="menu-item">
              <Link className="header__link" to="/contact">
                Kontaktlar
              </Link>
            </li>
          </ul>
        </Modal>
      </div>
    </div>
  );
};
