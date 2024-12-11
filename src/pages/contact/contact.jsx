import React, { useState } from "react";
import "./contact.scss";
import GoogleMapReact from "google-map-react";
import { Link } from "react-router-dom";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export const Contact = () => {
  const defaultProps = {
    center: {
      lat: 40.63264499263889,
      lng: 72.23962458657948,
    },
    zoom: 11,
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="contact container">
      <Link className="home_page_link" to="/">
        Bosh sahifa
      </Link>
      / Kompaniya haqida
      <div className="contact-form">
        <h1>Biz bilan bog'lanish</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">F.I.Sh.</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
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
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Sizning xabaringiz</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Yuborish</button>
        </form>
      </div>
      <div
        className="map"
        style={{ height: "70vh", width: "70%", margin: "0 auto" }}
      >
        <h1 className="map__title">Bizning manzil</h1>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent lat={40.63264499263889} lng={72.23962458657948} />
        </GoogleMapReact>
      </div>
    </div>
  );
};
