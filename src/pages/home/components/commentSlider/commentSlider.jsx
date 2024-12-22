import React from "react";
import Slider from "react-slick";
import "./commentSlider.scss";
import harness from "../../../../assets/images/home/harness.png";

const comments = [
  { id: 1, name: "Product A", image: harness },
  { id: 2, name: "Product B", image: harness },
  { id: 3, name: "Product C", image: harness },
  { id: 4, name: "Product D", image: harness },
  { id: 5, name: "Product E", image: harness },
];

const CommentCard = ({ name, image }) => (
  <div className="comment-card">
    <div className="comment-card__header">
      <p className="comment-card__author">{name}</p>
    </div>
    <img src={image} alt={`${name}`} className="comment-card__image" />
  </div>
);

export const CommentSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 3 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {comments.map((comment) => (
          <CommentCard
            key={comment.id}
            name={comment.name}
            image={comment.image}
          />
        ))}
      </Slider>
    </div>
  );
};
