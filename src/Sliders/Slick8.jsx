import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slick8.css";

function Slick8() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  const images = [
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee", 
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e", 
    "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0",
    "https://images.unsplash.com/photo-1518791841217-8f162f1e1131", 
    "https://images.unsplash.com/photo-1507149833265-60c372daea22",
  ];

  return (
    <div className="slider-container">
      <h1>8. Vertical Slick Slider</h1>

      <Slider {...settings}>
        {images.map((img, i) => (
          <div key={i} className="slick-slide-box">
            <img src={img} alt={`slide-${i}`} className="slick-img" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Slick8;
