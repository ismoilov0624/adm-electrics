import React, { useState } from "react";
import "./contact.scss";
import GoogleMapReact from "google-map-react";
import { Link } from "react-router-dom";
import { useScrollTop } from "../../hooks/useScrollTop";

// Component for displaying map marker
const MapMarker = () => (
  <div className="map-marker">
    <span role="img" aria-label="location">
      📍
    </span>
  </div>
);

export const Contact = () => {
  useScrollTop(0);

  // Default map properties
  const defaultProps = {
    center: { lat: 40.63264499263889, lng: 72.23962458657948 },
    zoom: 11,
  };

  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // State to handle form validation feedback
  const [formFeedback, setFormFeedback] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      console.log("Form submitted:", formData);
      setFormFeedback("Your message has been successfully sent!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      setFormFeedback("Please fill out all required fields.");
    }
  };

  return (
    <div className="contact container">
      <Link className="home_page_link" to="/">
        Bosh sahifa
      </Link>
      <span> / Kontaktlar</span>

      <div className="contact__wrapper">
        {/* Contact Form */}
        <div className="contact-form">
          <h1>Biz bilan bog'lanish</h1>
          {formFeedback && <p className="form-feedback">{formFeedback}</p>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">F.I.Sh.</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ismingizni kiriting"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Emailingizni kiriting"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Telefon</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Telefon raqamingizni kiriting"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Sizning xabaringiz</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Xabaringizni kiriting"
                required
              />
            </div>

            <button className="contact-btn" type="submit">
              Yuborish
            </button>
          </form>
        </div>

        {/* Google Map */}
        <div className="map">
          <h1 className="map__title">Bizning manzil</h1>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }} // Add your API key here
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <MapMarker
              lat={defaultProps.center.lat}
              lng={defaultProps.center.lng}
            />
          </GoogleMapReact>
        </div>
      </div>
    </div>
  );
};
