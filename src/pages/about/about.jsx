import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useScrollTop } from "../../hooks/useScrollTop";
import { motion } from "framer-motion"; // Assuming framer-motion is installed
import { ChevronRight, Home, Target, Award, Users, Clock } from "lucide-react"; // Assuming lucide-react is installed
import "./about.scss";
import adm from "../../assets/images/about/adm.jpg";
import { PartnersSlider } from "../../components/partners-slider/partners-slider";
import ProductionHighlights from "../home/components/sections/production-hightlights/production-highlights";
import ForecastSection from "../home/components/sections/forecast-section/forecast-section";

export const About = () => {
  useScrollTop(0);
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState({
    overview: false,
    goals: false,
    stats: false,
    partners: false,
  });

  // Animation trigger on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["overview", "goals", "stats", "partners"];

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.75) {
            setIsVisible((prev) => ({ ...prev, [section]: true }));
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goals = [
    {
      number: "01",
      title: t("goal1_title"),
      description: t("goal1_desc"),
      icon: <Target size={20} />,
    },
    {
      number: "02",
      title: t("goal2_title"),
      description: t("goal2_desc"),
      icon: <Award size={20} />,
    },
    {
      number: "03",
      title: t("goal3_title"),
      description: t("goal3_desc"),
      icon: <Users size={20} />,
    },
  ];

  // Company stats (added for visual enhancement)
  const stats = [
    { value: "1+", label: t("yearsExperience"), icon: <Clock size={24} /> },
    { value: "5+", label: t("projectsCompleted"), icon: <Award size={24} /> },
    { value: "300+", label: t("teamMembers"), icon: <Users size={24} /> },
    { value: "20+", label: t("countries"), icon: <Target size={24} /> },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="container">
          <h1 className="about-hero__title">{t("about")}</h1>
          <div className="breadcrumb">
            <Link className="breadcrumb__link" to="/">
              <Home size={16} />
              <span>{t("home")}</span>
            </Link>
            <ChevronRight size={14} className="breadcrumb__separator" />
            <span className="breadcrumb__current">{t("about")}</span>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Overview Section */}
        <motion.section
          id="overview"
          className="overview-section"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible.overview ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="section-header">
            <h2 className="section-title">{t("aboutCompanyTitleFull")}</h2>
            <div className="section-divider"></div>
          </div>

          <div className="overview-content">
            <div className="overview-image-wrapper">
              <img
                className="overview-image"
                src={adm || "/placeholder.svg"}
                alt={t("aboutCompanyAlt")}
              />
              <div className="overview-image-accent"></div>
            </div>

            <div className="overview-text">
              <p>{t("aboutCompanyFullText")}</p>

              <div className="company-mission">
                <h3 className="company-mission__title">{t("ourMission")}</h3>
                <p className="company-mission__text">{t("missionStatement")}</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Stats Section */}
        <motion.section
          id="stats"
          className="stats-section"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible.stats ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible.stats ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="stat-card__icon">{stat.icon}</div>
                <div className="stat-card__value">{stat.value}</div>
                <div className="stat-card__label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <ProductionHighlights />
        <ForecastSection />

        {/* Goals Section */}
        <motion.section
          id="goals"
          className="goals-section"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible.goals ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="goals-container">
            <div className="goals-header">
              <h2 className="goals-title">{t("strategicGoalsTitle")}</h2>
              <div className="section-divider"></div>
              <p className="goals-description">{t("strategicGoalsText")}</p>
            </div>

            <div className="goals-list">
              {goals.map((goal, index) => (
                <motion.div
                  key={index}
                  className="goal-card"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible.goals ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                >
                  <div className="goal-card__number">{goal.number}</div>
                  <div className="goal-card__content">
                    <div className="goal-card__icon">{goal.icon}</div>
                    <h3 className="goal-card__title">{goal.title}</h3>
                    <p className="goal-card__description">{goal.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Partners Section */}
        <motion.section
          id="partners"
          className="partners-section"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible.partners ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <PartnersSlider title={t("ourPartners")} />
        </motion.section>
      </div>
    </div>
  );
};
