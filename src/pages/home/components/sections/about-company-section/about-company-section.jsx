import { Link } from "react-router-dom";
import { Calendar, MapPin, BarChart2, Package, Target } from "react-feather";
import "./about-company-section.scss";
import slider2 from "../../../../../assets/images/home/slider2.jpeg";
import { useTranslation } from "react-i18next";

const AboutCompanySection = () => {
  const { t } = useTranslation();

  return (
    <section id="about-company" className="about-company">
      <div className="container">
        <div className="about-company__grid">
          {/* Left Image Block */}
          <div className="about-company__image-container">
            <div className="about-company__image-accent"></div>
            <img
              src={slider2 || "/placeholder.svg"}
              alt={t("about_title")}
              className="about-company__image"
            />
            <div className="about-company__badges">
              <div className="badge">
                <Calendar className="badge__icon" />
                <span>{t("established")}</span>
              </div>
              <div className="badge">
                <MapPin className="badge__icon" />
                <span>{t("area")}</span>
              </div>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="about-company__content">
            <h2 className="section-title">{t("about_title")}</h2>
            <div className="section-divider"></div>
            <p className="about-company__text">{t("text_1")}</p>
            <p className="about-company__text">{t("text_2")}</p>

            <div className="about-company__stats">
              <div className="stat-card">
                <BarChart2 className="stat-card__icon" />
                <h3 className="stat-card__title">{t("production")}</h3>
                <p className="stat-card__text">{t("production_text")}</p>
              </div>
              <div className="stat-card">
                <Package className="stat-card__icon" />
                <h3 className="stat-card__title">{t("capacity")}</h3>
                <p className="stat-card__text">{t("capacity_text")}</p>
              </div>
              <div className="stat-card">
                <Target className="stat-card__icon" />
                <h3 className="stat-card__title">{t("growth")}</h3>
                <p className="stat-card__text">{t("growth_text")}</p>
              </div>
            </div>

            <div className="about-company__cta">
              <Link to="/about" className="btn btn-primary">
                {t("learn_more")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompanySection;
