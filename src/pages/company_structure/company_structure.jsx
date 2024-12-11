import React from "react";
import "./company_structure.scss";
import { Link } from "react-router-dom";

export const Company_structure = () => {
  return (
    <div className="company__structure container">
      <Link className="home_page_link" to="/">
        Bosh sahifa
      </Link>
      / Tashkiliy tuzilma
      <div className="company__structure__wrapper">
        <div className="profile-card">
          <div className="profile-image">
            <img src="/path-to-profile-image.jpg" alt="Profile" />
          </div>
          <div className="profile-info">
            <h2 className="name">Ism Familiya</h2>
            <p className="position">Lavozimi</p>

            <div className="contact-info">
              <div className="contact-item">
                <span className="label">Telefon:</span>
                <a href="tel:+998 71 232-83-73" className="value">
                  +99812345678
                </a>
              </div>

              <div className="contact-item">
                <span className="label">Elektron pochta:</span>
                <a href="mailto:info@aloqabank.uz" className="value">
                  info
                </a>
              </div>

              <div className="contact-item">
                <span className="label">Qabul kunlari:</span>
                <span className="value">Dishanba 09:00 - 11:00</span>
              </div>
            </div>
          </div>
        </div>
        <div className="profile-card">
          <div className="profile-image">
            <img src="/path-to-profile-image.jpg" alt="Profile" />
          </div>
          <div className="profile-info">
            <h2 className="name">Ism Familiya</h2>
            <p className="position">Lavozimi</p>

            <div className="contact-info">
              <div className="contact-item">
                <span className="label">Telefon:</span>
                <a href="tel:+998 71 232-83-73" className="value">
                  +99812345678
                </a>
              </div>

              <div className="contact-item">
                <span className="label">Elektron pochta:</span>
                <a href="mailto:info@aloqabank.uz" className="value">
                  info
                </a>
              </div>

              <div className="contact-item">
                <span className="label">Qabul kunlari:</span>
                <span className="value">Dishanba 09:00 - 11:00</span>
              </div>
            </div>
          </div>
        </div>
        <div className="profile-card">
          <div className="profile-image">
            <img src="/path-to-profile-image.jpg" alt="Profile" />
          </div>
          <div className="profile-info">
            <h2 className="name">Ism Familiya</h2>
            <p className="position">Lavozimi</p>

            <div className="contact-info">
              <div className="contact-item">
                <span className="label">Telefon:</span>
                <a href="tel:+998 71 232-83-73" className="value">
                  +99812345678
                </a>
              </div>

              <div className="contact-item">
                <span className="label">Elektron pochta:</span>
                <a href="mailto:info@aloqabank.uz" className="value">
                  info
                </a>
              </div>

              <div className="contact-item">
                <span className="label">Qabul kunlari:</span>
                <span className="value">Dishanba 09:00 - 11:00</span>
              </div>
            </div>
          </div>
        </div>
        <div className="profile-card">
          <div className="profile-image">
            <img src="/path-to-profile-image.jpg" alt="Profile" />
          </div>
          <div className="profile-info">
            <h2 className="name">Ism Familiya</h2>
            <p className="position">Lavozimi</p>

            <div className="contact-info">
              <div className="contact-item">
                <span className="label">Telefon:</span>
                <a href="tel:+998 71 232-83-73" className="value">
                  +99812345678
                </a>
              </div>

              <div className="contact-item">
                <span className="label">Elektron pochta:</span>
                <a href="mailto:info@aloqabank.uz" className="value">
                  info
                </a>
              </div>

              <div className="contact-item">
                <span className="label">Qabul kunlari:</span>
                <span className="value">Dishanba 09:00 - 11:00</span>
              </div>
            </div>
          </div>
        </div>
        <div className="profile-card">
          <div className="profile-image">
            <img src="/path-to-profile-image.jpg" alt="Profile" />
          </div>
          <div className="profile-info">
            <h2 className="name">Ism Familiya</h2>
            <p className="position">Lavozimi</p>

            <div className="contact-info">
              <div className="contact-item">
                <span className="label">Telefon:</span>
                <a href="tel:+998 71 232-83-73" className="value">
                  +99812345678
                </a>
              </div>

              <div className="contact-item">
                <span className="label">Elektron pochta:</span>
                <a href="mailto:info@aloqabank.uz" className="value">
                  info
                </a>
              </div>

              <div className="contact-item">
                <span className="label">Qabul kunlari:</span>
                <span className="value">Dishanba 09:00 - 11:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
