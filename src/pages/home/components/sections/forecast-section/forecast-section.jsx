import React from "react";
import { Target, Award, Users } from "react-feather";
import "./forecast-section.scss";
import { useTranslation } from "react-i18next";

const ForecastSection = () => {
  const { t } = useTranslation();

  return (
    <section className="forecast-section">
      <div className="container">
        <div className="forecast-section__grid">
          <div className="forecast-section__content">
            <h2 className="section-title">{t("forecast_title")}</h2>
            <div className="section-divider"></div>

            <div className="forecast-section__features">
              <div className="feature">
                <div className="feature__icon-container">
                  <Target className="feature__icon" />
                </div>
                <div className="feature__content">
                  <h3 className="feature__title">
                    {t("forecast_growth_title")}
                  </h3>
                  <p className="feature__text">{t("forecast_growth_text")}</p>
                </div>
              </div>

              <div className="feature">
                <div className="feature__icon-container">
                  <Award className="feature__icon" />
                </div>
                <div className="feature__content">
                  <h3 className="feature__title">
                    {t("forecast_quality_title")}
                  </h3>
                  <p className="feature__text">{t("forecast_quality_text")}</p>
                </div>
              </div>

              <div className="feature">
                <div className="feature__icon-container">
                  <Users className="feature__icon" />
                </div>
                <div className="feature__content">
                  <h3 className="feature__title">
                    {t("forecast_people_title")}
                  </h3>
                  <p className="feature__text">{t("forecast_people_text")}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="forecast-section__chart">
            <div className="forecast-card">
              <h3 className="forecast-card__title">
                {t("forecast_chart_title")}
              </h3>

              <div className="forecast-item">
                <div className="forecast-item__header">
                  <span className="forecast-item__year">2024</span>
                  <span className="forecast-item__value">$7.0 million</span>
                </div>
                <div className="forecast-item__progress-container">
                  <div
                    className="forecast-item__progress"
                    style={{ width: "40%" }}
                  ></div>
                </div>
              </div>

              <div className="forecast-item">
                <div className="forecast-item__header">
                  <span className="forecast-item__year">2025</span>
                  <span className="forecast-item__value">$10.0 million</span>
                </div>
                <div className="forecast-item__progress-container">
                  <div
                    className="forecast-item__progress"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </div>

              <div className="forecast-item">
                <div className="forecast-item__header">
                  <span className="forecast-item__year">2026</span>
                  <span className="forecast-item__value">$16.0 million</span>
                </div>
                <div className="forecast-item__progress-container">
                  <div
                    className="forecast-item__progress"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>

              <div className="forecast-card__footer">
                <p className="forecast-card__note">
                  {t("forecast_footer_note")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForecastSection;
