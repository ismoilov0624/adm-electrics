import React from "react";
import "./company_structure.scss";
import { Link } from "react-router-dom";
import { ProfileCard } from "./components/profile-card/profile-card";
import profileImage from "../../assets/images/company-structure/img.jpg";

const profileData = [
  {
    image: profileImage,
    name: "Ism Familiya",
    position: "Lavozimi",
    phone: "+99812345678",
    email: "info@adm.uz",
    schedule: "Dushanba 09:00 - 11:00",
  },
  {
    image: profileImage,
    name: "Ism Familiya",
    position: "Lavozimi",
    phone: "+99812345678",
    email: "info@adm.uz",
    schedule: "Dushanba 09:00 - 11:00",
  },
  {
    image: profileImage,
    name: "Ism Familiya",
    position: "Lavozimi",
    phone: "+99812345678",
    email: "info@adm.uz",
    schedule: "Dushanba 09:00 - 11:00",
  },
  {
    image: profileImage,
    name: "Ism Familiya",
    position: "Lavozimi",
    phone: "+99812345678",
    email: "info@adm.uz",
    schedule: "Dushanba 09:00 - 11:00",
  },
  {
    image: profileImage,
    name: "Ism Familiya",
    position: "Lavozimi",
    phone: "+99812345678",
    email: "info@adm.uz",
    schedule: "Dushanba 09:00 - 11:00",
  },
  {
    image: profileImage,
    name: "Ism Familiya",
    position: "Lavozimi",
    phone: "+99812345678",
    email: "info@adm.uz",
    schedule: "Dushanba 09:00 - 11:00",
  },
];

export const Company_structure = () => {
  return (
    <div className="company__structure container">
      <Link className="home_page_link" to="/">
        Bosh sahifa
      </Link>
      / Korxona boshqaruvi
      <div className="company__structure__wrapper">
        {profileData.map((profile, index) => (
          <ProfileCard key={index} {...profile} />
        ))}
      </div>
    </div>
  );
};
