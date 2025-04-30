import React, { useState, useEffect } from "react";
import "./contact.scss";
import { Link } from "react-router-dom";
import L from "leaflet";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formFeedback, setFormFeedback] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      console.log("Form submitted:", formData);
      setFormFeedback(t("contact_page.form_success"));
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      setFormFeedback(t("contact_page.form_error"));
    }
  };

  useEffect(() => {
    const map = L.map("map").setView(
      [40.63263855831456, 72.23964406084116],
      16
    );
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors",
    }).addTo(map);

    L.marker([40.632505, 72.239294])
      .addTo(map)
      .bindPopup("We are here!")
      .openPopup();
  }, []);

  return (
    <div className="contact container">
      <Link className="home_page_link" to="/">
        {t("contact_page.home")}
      </Link>
      <span> / {t("contact_page.breadcrumb")}</span>

      <div className="contact__wrapper">
        <div className="contact-form">
          <h1>{t("contact_page.title")}</h1>
          {formFeedback && <p className="form-feedback">{formFeedback}</p>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">{t("contact_page.name")}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t("contact_page.name_placeholder")}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">{t("contact_page.email")}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t("contact_page.email_placeholder")}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">{t("contact_page.phone")}</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={t("contact_page.phone_placeholder")}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">{t("contact_page.message")}</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t("contact_page.message_placeholder")}
                required
              />
            </div>

            <button className="contact-btn" type="submit">
              {t("contact_page.submit")}
            </button>
          </form>
        </div>

        <div className="map">
          <h1 className="map__title">{t("contact_page.map_title")}</h1>
          <div id="map" style={{ height: "400px", width: "100%" }}></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
