import React from "react";
import { HomeBanner } from "./components/banner/home-banner";
import slider2 from "../../assets/images/home/slider2.jpeg";
import "./home.scss";
import { CommentSlider } from "./components/commentSlider/commentSlider";
import { NewsBanner } from "../news/components/banner/news-banner";
import { NewsCard } from "../news/components/card/news-card";
import { Link } from "react-router-dom";
import { useScrollTop } from "../../hooks/useScrollTop";
import { useTranslation } from "react-i18next";
import { newsDataUz, newsDataRu, newsDataEn } from "../news/news-data";
import { ProfileCard } from "../company_structure/components/profile-card/profile-card";
import Abduraxmon from "../../assets/images/company-structure/Abduraxmon.jpg";
import Islomjon from "../../assets/images/company-structure/islomjon.jpg";
import Valisher from "../../assets/images/company-structure/Valisher.jpg";
import profileImg from "../../assets/images/company-structure/img.jpg";
import { PartnersSlider } from "../../components/partners-slider/partners-slider";
import AboutCompanySection from "./components/sections/about-company-section/about-company-section";
import CarPartsViewer from "./components/sections/parts-diagram/parts-diagram";

export const Home = () => {
  const { t, i18n } = useTranslation();
  useScrollTop(0);

  const lang = i18n.language;

  let newsData;
  if (lang === "uz") {
    newsData = newsDataUz;
  } else if (lang === "ru") {
    newsData = newsDataRu;
  } else {
    newsData = newsDataEn;
  }

  const featuredEmployees = [
    {
      image: profileImg,
      name: "Yakubov Abduraxmon Sirojiddinovich",
      position: t("positions.ceo"),
      email: "abduraxmon.yakubov@adm-electrics.com",
      schedule: `${t("schedule")}: Dushanba 09:00 - 11:00`,
    },
    {
      image: profileImg,
      name: "Islomjon Tuxtaboev Ikromjonovich",
      position: t("positions.deputy_production"),
      email: "islomjon.tukhtaboev@adm-electrics.com",
      schedule: `${t("schedule")}: Seshanba 09:00 - 11:00`,
    },
    {
      image: Valisher,
      name: "Mirzayev Valisher Alisherovich",
      position: t("positions.admin_head"),
      email: "valisher.mirzayev@adm-electrics.com",
      schedule: `${t("schedule")}: Chorshanba 09:00 - 11:00`,
    },
    {
      image: profileImg,
      name: "Madaminov Ulug'bek Numonjon o'g'li",
      position: t("positions.hr_head"),
      // phone: "+99893 412 70 08",
      email: "ulugbek.madaminov@adm-electrics.com",
      schedule: `${t("schedule")}: Payshanba 09:00 - 11:00`,
    },
  ];

  return (
    <div className="home">
      <HomeBanner />

      <AboutCompanySection />

      <div className="comments container">
        <h2 className="comments__title">{t("productsTitle")}</h2>
        <CommentSlider />
      </div>

      <CarPartsViewer />

      <div className="employees_section container">
        <h2 className="comments__title">{t("ourEmployees")}</h2>
        <div className="company__structure__wrapper">
          {featuredEmployees.map((profile, index) => (
            <ProfileCard key={index} {...profile} />
          ))}
        </div>
        <Link className="news_link" to="/company_structure">
          {t("allEmployees")}
        </Link>
      </div>

      <div className="news_section container">
        <h2 className="comments__title">{t("newsTitle")}</h2>
        <div className="news_section__content">
          <NewsBanner>
            {newsData.slice(0, 4).map((item) => (
              <NewsCard
                key={item.id}
                img={item.img}
                title={item.title}
                text={item.text}
              >
                <Link to={`news-detail/${item.id}`} className="news__button">
                  {t("readMore")}
                </Link>
              </NewsCard>
            ))}
          </NewsBanner>
        </div>
        <Link className="news_link" to="/news">
          {t("allNews")}
        </Link>
      </div>

      <PartnersSlider title={t("ourPartners")} />
    </div>
  );
};
