import React from "react";
import { useTranslation } from "react-i18next";

export const ProfileCard = ({
  image,
  name,
  position,
  phone,
  email,
  schedule,
}) => {
  const { t } = useTranslation();

  return (
    <div className="profile-card">
      <div className="profile-image">
        <img src={image} alt={`${name}'s Profile`} />
      </div>
      <div className="profile-info">
        <h2 className="name">{name}</h2>
        <p className="position">{position}</p>
        <div className="contact-info">
          <div className="contact-item">
            <span className="label">{t("phone")}</span>
            <a href={`tel:${phone}`} className="value">
              {phone}
            </a>
          </div>
          <div className="contact-item">
            <span className="label">{t("email")}</span>
            <a href={`mailto:${email}`} className="value">
              {email}
            </a>
          </div>
          <div className="contact-item">
            <span className="label">{t("schedule")}</span>
            <span className="value">{schedule}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
