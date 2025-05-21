import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import "./commentSlider.scss";

import main_harness from "../../../../assets/images/home/main-harness.png";
import front_harness from "../../../../assets/images/home/front-harness.png";
import door_harness from "../../../../assets/images/home/door-harness.png";
import front_bumper from "../../../../assets/images/home/front-bumper.png";
import floor_harness from "../../../../assets/images/home/floor-harness.png";
import rear_bumper from "../../../../assets/images/home/rear-bumper.png";

// Updated connectionsData to match the product names
const connectionsData = {
  "Main Harness": [
    { code: "M05, GM04, GM01", descKey: "mainConn1" },
    { code: "ICU-D, ICU-E", descKey: "mainConn2" },
    { code: "M41, M31", descKey: "mainConn3" },
  ],
  "Front Harness": [
    { code: "JE31, E336, JE32", descKey: "frontConn1" },
    { code: "ICU-A, ICU-B", descKey: "frontConn2" },
    { code: "E/R Junction Block", descKey: "frontConn3" },
  ],
  "Floor Harness": [
    { code: "F16, F05-R, F37", descKey: "floorConn1" },
    { code: "GF04, F14", descKey: "floorConn2" },
    { code: "F28-B/F28-L", descKey: "floorConn3" },
  ],
  "Door Harness": [
    { code: "D02L", descKey: "doorConn1" },
    { code: "D03A/B/C", descKey: "doorConn2" },
    { code: "D08", descKey: "doorConn3" },
    { code: "FD11", descKey: "doorConn4" },
  ],
  "Front Bumper Harness": [
    { code: "E50-CL/CR", descKey: "frontBumperConn1" },
    { code: "E50-L/R", descKey: "frontBumperConn2" },
    { code: "JE01", descKey: "frontBumperConn3" },
    { code: "EE12", descKey: "frontBumperConn4" },
  ],
  "Rear Bumper Harness": [
    { code: "R21-L/R", descKey: "rearBumperConn1" },
    { code: "R24-E", descKey: "rearBumperConn2" },
    { code: "FR11", descKey: "rearBumperConn3" },
  ],
};

const ProductModal = ({ product, isOpen, onClose }) => {
  const { t } = useTranslation();

  if (!isOpen) return null;

  const connections = connectionsData[product.name] || [];

  return (
    <div className="product-modal-overlay" onClick={onClose}>
      <div className="product-modal" onClick={(e) => e.stopPropagation()}>
        <button className="product-modal__close-btn" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="product-modal__content">
          <div className="product-modal__image-container">
            <img
              src={product.image || "/placeholder.svg"}
              alt={t(product.nameKey)}
              className="product-modal__image"
            />
          </div>

          <div className="product-modal__details">
            <h2 className="product-modal__title">{t(product.nameKey)}</h2>
            <p className="product-modal__description">
              {t(product.descriptionKey)}
            </p>

            <div className="product-modal__specifications">
              <h3 className="product-modal__subtitle">
                {t("keyConnections")}:
              </h3>
              <ul className="product-modal__spec-list">
                {connections.map((conn, index) => (
                  <li key={index} className="product-modal__spec-item">
                    <strong>{conn.code}:</strong> {t(conn.descKey)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow custom-arrow-prev" onClick={onClick}>
      <ChevronLeft size={24} />
    </div>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow custom-arrow-next" onClick={onClick}>
      <ChevronRight size={24} />
    </div>
  );
};

const CommentCard = ({ nameKey, image, categoryKey, onViewDetails }) => {
  const { t } = useTranslation();

  return (
    <div className="comment-card">
      <div className="comment-card__header">
        <p className="comment-card__author">{t(nameKey)}</p>
        {categoryKey && (
          <span className="comment-card__category">{t(categoryKey)}</span>
        )}
      </div>
      <div className="comment-card__image-container">
        <img
          src={image || "/placeholder.svg"}
          alt={`${t(nameKey)}`}
          className="comment-card__image"
        />
        <div className="comment-card__overlay">
          <button className="comment-card__view-btn" onClick={onViewDetails}>
            {t("viewDetails")}
          </button>
        </div>
      </div>
    </div>
  );
};

export const CommentSlider = () => {
  const { t } = useTranslation();
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Define products with translation keys
  const products = [
    {
      id: 1,
      nameKey: "mainHarness",
      name: "Main Harness",
      image: main_harness,
      descriptionKey: "mainDescription",
      description:
        "Main wiring harness connecting all major electrical components",
    },
    {
      id: 2,
      nameKey: "frontHarness",
      name: "Front Harness",
      image: front_harness,
      descriptionKey: "frontDescription",
      description: "Front harness for engine and front electrical components",
    },
    {
      id: 3,
      nameKey: "floorHarness",
      name: "Floor Harness",
      image: floor_harness,
      descriptionKey: "floorDescription",
      description: "Floor harness connecting underbody electrical components",
    },
    {
      id: 4,
      nameKey: "doorHarness",
      name: "Door Harness",
      image: door_harness,
      descriptionKey: "doorDescription",
      description: "Driver door harness for window, lock and mirror controls",
    },
    {
      id: 5,
      nameKey: "frontBumperHarness",
      name: "Front Bumper Harness",
      image: front_bumper,
      descriptionKey: "frontBumperDescription",
      description: "Front bumper harness for sensors and lighting",
    },
    {
      id: 6,
      nameKey: "rearBumperHarness",
      name: "Rear Bumper Harness",
      image: rear_bumper,
      descriptionKey: "rearBumperDescription",
      description: "Rear bumper harness for sensors and lighting",
    },
  ];

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 600) {
        setSlidesToShow(2);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "auto";
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    arrows: true,
    appendDots: (dots) => <ul style={{ margin: "0px" }}>{dots}</ul>,
    customPaging: (i) => <button style={{ padding: "5px" }}></button>,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="slider-container">
      <div className="slider-wrapper">
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="slide-item">
              <CommentCard
                nameKey={product.nameKey}
                image={product.image}
                categoryKey={product.categoryKey}
                onViewDetails={() => handleViewDetails(product)}
              />
            </div>
          ))}
        </Slider>
      </div>

      <ProductModal
        product={selectedProduct}
        isOpen={modalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};
