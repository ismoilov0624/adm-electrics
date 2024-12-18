import React from "react";

export const ProfileCard = ({
  image,
  name,
  position,
  phone,
  email,
  schedule,
}) => {
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
            <span className="label">Telefon:</span>
            <a href={`tel:${phone}`} className="value">
              {phone}
            </a>
          </div>
          <div className="contact-item">
            <span className="label">Elektron pochta:</span>
            <a href={`mailto:${email}`} className="value">
              {email}
            </a>
          </div>
          <div className="contact-item">
            <span className="label">Qabul kunlari:</span>
            <span className="value">{schedule}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
