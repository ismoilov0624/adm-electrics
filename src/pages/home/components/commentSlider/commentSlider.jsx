import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import "./commentSlider.scss";
import main_harness from "../../../../assets/images/home/main-harness.png";
import front_harness from "../../../../assets/images/home/front-harness.png";
import door_harness from "../../../../assets/images/home/door-harness.png";
import bumper_harness from "../../../../assets/images/home/bumper-harness.png";
import battery_harness from "../../../../assets/images/home/battery-harness.png";

const products = [
  {
    id: 1,
    name: "Main Harness",
    image: main_harness,
    description:
      "Main wiring harness connecting all major electrical components",
    specifications: [
      "M05, GM04, GM01: Engine control connections",
      "ICU-D, ICU-E: Interior control unit connections",
      "M41, M31: Power distribution connections",
    ],
  },
  {
    id: 2,
    name: "Front Harness",
    image: front_harness,
    description: "Front harness for engine and front electrical components",
    specifications: [
      "JE31, E336, JE32: Engine sensor connections",
      "ICU-A, ICU-B: Control unit connections",
      "E/R Junction Block: Engine room junction conn  ections",
    ],
  },
  {
    id: 3,
    name: "Door Harness",
    image: door_harness,
    description:
      "Specialized front wiring harness designed for headlight and sensor connections with waterproof sealing.",
    specifications: ["Length: 1.8m", "Connectors: 8"],
  },
  {
    id: 4,
    name: "Bumper Harness",
    image: bumper_harness,
    description:
      "Specialized front wiring harness designed for headlight and sensor connections with waterproof sealing.",
    specifications: ["Length: 1.8m", "Connectors: 8"],
  },
  {
    id: 5,
    name: "Battery Harness",
    image: battery_harness,
    description:
      "Premium front harness with enhanced electromagnetic interference protection and quick-connect terminals.",
    specifications: ["Length: 2m", "Connectors: 10"],
  },
];

const ProductModal = ({ product, isOpen, onClose }) => {
  if (!isOpen) return null;

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
              alt={product.name}
              className="product-modal__image"
            />
          </div>

          <div className="product-modal__details">
            <h2 className="product-modal__title">{product.name}</h2>
            <p className="product-modal__description">{product.description}</p>

            <div className="product-modal__specifications">
              <h3 className="product-modal__subtitle">Key Connections:</h3>
              <ul className="product-modal__spec-list">
                {product.specifications &&
                  product.specifications.map((spec, index) => (
                    <li key={index} className="product-modal__spec-item">
                      {spec}
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

const CommentCard = ({ name, image, category, onViewDetails }) => (
  <div className="comment-card">
    <div className="comment-card__header">
      <p className="comment-card__author">{name}</p>
      {category && <span className="comment-card__category">{category}</span>}
    </div>
    <div className="comment-card__image-container">
      <img
        src={image || "/placeholder.svg"}
        alt={`${name}`}
        className="comment-card__image"
      />
      <div className="comment-card__overlay">
        <button className="comment-card__view-btn" onClick={onViewDetails}>
          View Details
        </button>
      </div>
    </div>
  </div>
);

export const CommentSlider = () => {
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

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
                name={product.name}
                image={product.image}
                category={product.category}
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
