import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import logo from "../../assets/images/home/logo.png";

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
        <a className="header__link" href="tel:+998552020005">
          +998 55 202 00 05
        </a>
      </nav>
    </div>
  );
};
