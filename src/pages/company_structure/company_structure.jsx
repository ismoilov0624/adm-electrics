import React from "react";
import "./company_structure.scss";
import { Link } from "react-router-dom";

import { useScrollTop } from "../../hooks/useScrollTop";
import { ProfileCard } from "./components/profile-card/profile-card";
import profileImage from "../../assets/images/company-structure/img.jpg";
import Abduraxmon from "../../assets/images/company-structure/Abduraxmon.jpg";
import Bekzod from "../../assets/images/company-structure/Bekzod.jpg";
import Islomjon from "../../assets/images/company-structure/islomjon.jpg";
import Murodiljon from "../../assets/images/company-structure/murodiljon.jpg";
import Muslimbek from "../../assets/images/company-structure/Muslimbek.jpg";
import Valisher from "../../assets/images/company-structure/Valisher.jpg";
import Xushnudbek from "../../assets/images/company-structure/Xushnudbek.jpg";

const profileData = [
  {
    image: Abduraxmon,
    name: "Yakubov Abduraxmon Sirojiddinovich",
    position: "Bosh direktor",
    phone: "+99897 445 48 11",
    email: "abduraxmon.yakubov@adm-electrics.com",
    schedule: "Dushanba 09:00 - 11:00",
  },
  {
    image: Islomjon,
    name: "Islomjon Tuxtaboev Ikromjonovich",
    position: "Ishlab chuqarish bo'yicha direktor o'rinbosari",
    phone: "+99894 409 11 28",
    email: "islomjon.tukhtaboev@adm-electrics.com",
    schedule: "Seshanba 09:00 - 11:00",
  },
  {
    image: Valisher,
    name: "Mirzayev Valisher Alisherovich",
    position: "Ma'muriyat bo'limi rahbari",
    phone: "+99899 994 44 88",
    email: "valisher.mirzayev@adm-electrics.com",
    schedule: "Chorshanba 09:00 - 11:00",
  },
  {
    image: profileImage,
    name: "Madaminov Ulug'bek Numonjon o'g'li",
    position: "Xodimlar boshqaruvi bo'limi rahbari",
    phone: "+99893 412 70 08",
    email: "ulugbek.madaminov@adm-electrics.com",
    schedule: "Payshanba 09:00 - 11:00",
  },
  {
    image: profileImage,
    name: "Raxmonov Saidbek Saibjanovich",
    position: "Moliyaviy menedjer",
    phone: "+99833 990 47 88",
    email: "saidbek.raxmanov@adm-electrics.com",
    schedule: "Dushanba 09:00 - 11:00",
  },
  {
    image: Muslimbek,
    name: "Ne'matillayev Muslimbek Shuxratbek o'g'li",
    position: "Bosh Xisobchi",
    phone: "+99894 566 71 77",
    email: "muslimbek.nematullayev@adm-electrics.com",
    schedule: "Dushanba 09:00 - 11:00",
  },
  {
    image: profileImage,
    name: "Voxobov Dilyorbek Voxidjon o'g'li",
    position: "Xarid bo'limi rahbari",
    phone: "+99894 566 71 77",
    email: "dilyor.vokhobov@adm-electrics.com",
    schedule: "Dushanba 09:00 - 11:00",
  },
  {
    image: Xushnudbek,
    name: "Mamatqulov Xushnudbek Davlatbek o'g'li",
    position: "Ombor mudiri",
    phone: "+99895 044 78 88",
    email: "xushnudbek.mamatqulov@adm-electrics.com",
    schedule: "Dushanba 09:00 - 11:00",
  },
  {
    image: Bekzod,
    name: "Abduraxmonov Bekzodbek Baxodir o'g'li",
    position: "Sifat nazorati bo'limi rahbari",
    phone: "+99890 220 90 29",
    email: "bekzodbek.abduraxmonov@adm-electrics.com",
    schedule: "Dushanba 09:00 - 11:00",
  },
  {
    image: profileImage,
    name: "Yusupov Akbarjon Akmaldjonovich",
    position: "Kommunal va texnik xizmat ko'rsatish bo'limi rahbari",
    phone: "+998933 526 05 88",
    email: "akbar.yusupov@adm-electrics.com",
    schedule: "Dushanba 09:00 - 11:00",
  },
  {
    image: Murodiljon,
    name: "Xurboyev Mirodiljon Kodirjon o'g'li",
    position: "Bosh texnolog",
    phone: "+99897 581 60 00",
    email: "mirodiljon.xurboyev@adm-electrics.com",
    schedule: "Dushanba 09:00 - 11:00",
  },
];

export const Company_structure = () => {
  useScrollTop(0);
  return (
    <div className="company__structure container">
      <Link className="home_page_link" to="/">
        Bosh sahifa
      </Link>
      <span> / Korxona boshqaruvi</span>
      <div className="company__structure__wrapper">
        {profileData.map((profile, index) => (
          <ProfileCard key={index} {...profile} />
        ))}
      </div>
    </div>
  );
};
