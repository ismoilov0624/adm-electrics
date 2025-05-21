import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./parts-diagram.scss";
import main_actual from "../../../../../assets/images/home/main-harness.png";
import main_diagramm from "../../../../../assets/images/home/main-diagramm.jpg";
import front_actual from "../../../../../assets/images/home/front-harness.png";
import front_diagramm from "../../../../../assets/images/home/front-diagramm.jpg";
import floor_actual from "../../../../../assets/images/home/floor-harness.png";
import floor_diagramm from "../../../../../assets/images/home/floor-diagramm.jpg";
import doors_actual from "../../../../../assets/images/home/door-harness.png";
import door_diagramm from "../../../../../assets/images/home/door-diagramm.jpg";
import front_bumper_actual from "../../../../../assets/images/home/front-bumper.png";
import front_bumper_diagramm from "../../../../../assets/images/home/front-bumper-diagramm.jpg";
import rear_bumper_actual from "../../../../../assets/images/home/rear-bumper.png";
import rear_bumper_diagramm from "../../../../../assets/images/home/rear-bumper-diagramm.jpg";

const CarPartsViewer = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("Main Wiring harness");
  const [selectedPart, setSelectedPart] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Define categories with translation keys
  const categories = [
    { id: "Main Wiring harness", translationKey: "mainCategory" },
    { id: "Front Wiring harness", translationKey: "frontCategory" },
    { id: "Floor Wiring harness", translationKey: "floorCategory" },
    { id: "Door Wiring harness", translationKey: "doorCategory" },
    { id: "Front Bumper harness", translationKey: "frontBumperCategory" },
    { id: "Rear Bumper harness", translationKey: "rearBumperCategory" },
  ];

  // Define parts with translation keys for descriptions
  const parts = [
    {
      id: 1,
      name: "Main Wiring harness",
      nameKey: "mainCategory",
      image: main_diagramm,
      realImage: main_actual,
      x: 65,
      y: 43,
      category: "Main Wiring harness",
      description:
        "Main wiring harness connecting all major electrical components",
      descriptionKey: "mainDescription",
    },
    {
      id: 2,
      name: "Front Wiring harness",
      nameKey: "frontCategory",
      image: front_diagramm,
      realImage: front_actual,
      x: 75,
      y: 55,
      category: "Front Wiring harness",
      description: "Front harness for engine and front electrical components",
      descriptionKey: "frontDescription",
    },
    {
      id: 3,
      name: "Floor Wiring harness",
      nameKey: "floorCategory",
      image: floor_diagramm,
      realImage: floor_actual,
      x: 40,
      y: 55,
      category: "Floor Wiring harness",
      description: "Floor harness connecting underbody electrical components",
      descriptionKey: "floorDescription",
    },
    {
      id: 4,
      name: "Door Wiring harness",
      nameKey: "doorCategory",
      image: door_diagramm,
      realImage: doors_actual,
      x: 50,
      y: 50,
      category: "Door Wiring harness",
      description: "Driver door harness for window, lock and mirror controls",
      descriptionKey: "doorDescription",
    },
    {
      id: 5,
      name: "Front Bumper harness",
      nameKey: "frontBumperCategory",
      image: front_bumper_diagramm,
      realImage: front_bumper_actual,
      x: 85,
      y: 60,
      category: "Front Bumper harness",
      description: "Front bumper harness for sensors and lighting",
      descriptionKey: "frontBumperDescription",
    },
    {
      id: 6,
      name: "Rear Bumper harness",
      nameKey: "rearBumperCategory",
      image: rear_bumper_diagramm,
      realImage: rear_bumper_actual,
      x: 18,
      y: 33,
      category: "Rear Bumper harness",
      description: "Rear bumper harness for parking sensors and lighting",
      descriptionKey: "rearBumperDescription",
    },
  ];

  // Define the connections data with translation keys
  const connectionsData = {
    "Main Wiring harness": [
      { code: "M05, GM04, GM01", descKey: "mainConn1" },
      { code: "ICU-D, ICU-E", descKey: "mainConn2" },
      { code: "M41, M31", descKey: "mainConn3" },
    ],
    "Front Wiring harness": [
      { code: "JE31, E336, JE32", descKey: "frontConn1" },
      { code: "ICU-A, ICU-B", descKey: "frontConn2" },
      { code: "E/R Junction Block", descKey: "frontConn3" },
    ],
    "Floor Wiring harness": [
      { code: "F16, F05-R, F37", descKey: "floorConn1" },
      { code: "GF04, F14", descKey: "floorConn2" },
      { code: "F28-B/F28-L", descKey: "floorConn3" },
    ],
    "Door Wiring harness": [
      { code: "D02L", descKey: "doorConn1" },
      { code: "D03A/B/C", descKey: "doorConn2" },
      { code: "D08", descKey: "doorConn3" },
      { code: "FD11", descKey: "doorConn4" },
    ],
    "Front Bumper harness": [
      { code: "E50-CL/CR", descKey: "frontBumperConn1" },
      { code: "E50-L/R", descKey: "frontBumperConn2" },
      { code: "JE01", descKey: "frontBumperConn3" },
      { code: "EE12", descKey: "frontBumperConn4" },
    ],
    "Rear Bumper harness": [
      { code: "R21-L/R", descKey: "rearBumperConn1" },
      { code: "R24-E", descKey: "rearBumperConn2" },
      { code: "FR11", descKey: "rearBumperConn3" },
    ],
  };

  useEffect(() => {
    const initialPart = parts.find((part) => part.category === activeCategory);
    if (initialPart && !selectedPart) {
      setSelectedPart(initialPart);
    }
  }, [activeCategory, selectedPart]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    const part = parts.find((part) => part.category === category);
    if (part) {
      setSelectedPart(part);
    }
  };

  const handleAllClick = () => {
    setActiveCategory("ALL");
    setSelectedPart(null);
  };

  const handlePartClick = (part) => {
    setSelectedPart(part);
    setActiveCategory(part.category);
  };

  const visibleParts =
    activeCategory === "ALL"
      ? parts
      : parts.filter((part) => part.category === activeCategory);

  // Helper function to get translated category name for display
  const getCategoryDisplayName = (categoryId) => {
    const category = categories.find((cat) => cat.id === categoryId);
    return category ? t(category.translationKey) : categoryId;
  };

  // Render connections for the selected part
  const renderConnections = () => {
    if (!selectedPart) return null;

    const connections = connectionsData[selectedPart.name];
    if (!connections) return null;

    return (
      <div className="part-connections">
        <h3>{t("keyConnections")}:</h3>
        <ul>
          {connections.map((conn, index) => (
            <li key={index}>
              <strong>{conn.code}:</strong> {t(conn.descKey)}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="car-parts-viewer container">
      <div className="category-tabs">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`category-tab ${
              activeCategory === category.id ? "active" : ""
            }`}
            onClick={() => handleCategoryClick(category.id)}
          >
            {t(category.translationKey).replace(
              t("mainCategory").includes("Wiring")
                ? " Wiring harness"
                : " harness",
              ""
            )}
          </button>
        ))}
      </div>

      <div className={`viewer-content ${isMobile ? "mobile" : ""}`}>
        <div className="car-view">
          <div className="car-container">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sonet-h2-JZmnDru4OwThjSlsI3OnTOTxEmVBH6.png"
              alt="Kia Sonet"
              className="car-image"
            />

            {parts.map((part) => (
              <div
                key={part.id}
                className={`hotspot ${
                  activeCategory === part.category || activeCategory === "ALL"
                    ? "active"
                    : ""
                }`}
                style={{ left: `${part.x}%`, top: `${part.y}%` }}
                onClick={() => handlePartClick(part)}
              >
                <div className="hotspot-icon">+</div>
                <div className="hotspot-label">
                  {t(part.nameKey).split(" ")[0]}
                </div>
              </div>
            ))}

            {visibleParts.map((part) => (
              <React.Fragment key={`line-${part.id}`}>
                <svg className="connection-line">
                  <line
                    x1={`${part.x}%`}
                    y1={`${part.y}%`}
                    x2={`${part.x - 20}%`}
                    y2={`${part.y + 10}%`}
                    stroke="#c3272b"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                  />
                </svg>

                <div
                  className={`harness-images-container ${
                    isMobile ? "mobile" : ""
                  }`}
                  style={{
                    left: `${part.x - 20}%`,
                    top: `${part.y + 10}%`,

                    ...(isMobile && {
                      left: `${part.x - 15}%`,
                      top: `${part.y + 15}%`,
                    }),
                  }}
                >
                  <div className="harness-image real">
                    <div className="image-label">{t("actualPart")}</div>
                    <img
                      src={part.realImage || "/placeholder.svg"}
                      alt={`${t(part.nameKey)} Photo`}
                    />
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {selectedPart && (
          <div className="parts-details">
            <div className="part-detail-card">
              <h2>{t(selectedPart.nameKey)}</h2>

              <div className="part-images">
                <div className="part-image-container diagram">
                  <h3>{t("techDiagram")}</h3>
                  <img
                    src={selectedPart.image || "/placeholder.svg"}
                    alt={`${t(selectedPart.nameKey)} Diagram`}
                  />
                </div>
              </div>

              {!isMobile && (
                <div className="part-info">
                  <p>{t(selectedPart.descriptionKey)}</p>
                  {renderConnections()}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarPartsViewer;
