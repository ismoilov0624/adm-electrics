import React from "react";
import { useTranslation } from "react-i18next";
import "./production-highlights.scss";

const ProductionHighlights = () => {
  const { t } = useTranslation();

  return (
    <section className="production-highlights">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t("productionHighlights.title")}</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            {t("productionHighlights.subtitle")}
          </p>
        </div>

        <div className="production-highlights__grid">
          <div className="highlight-card">
            <div className="highlight-card__header">
              <h3 className="highlight-card__title">
                {t("productionHighlights.cards.annualProduction.title")}
              </h3>
            </div>
            <div className="highlight-card__content">
              <p>{t("productionHighlights.cards.annualProduction.text")}</p>
            </div>
          </div>

          <div className="highlight-card">
            <div className="highlight-card__header">
              <h3 className="highlight-card__title">
                {t("productionHighlights.cards.facility.title")}
              </h3>
            </div>
            <div className="highlight-card__content">
              <p>{t("productionHighlights.cards.facility.text")}</p>
            </div>
          </div>

          <div className="highlight-card">
            <div className="highlight-card__header">
              <h3 className="highlight-card__title">
                {t("productionHighlights.cards.start.title")}
              </h3>
            </div>
            <div className="highlight-card__content">
              <p>{t("productionHighlights.cards.start.text")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductionHighlights;
