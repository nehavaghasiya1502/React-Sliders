import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../Sliders/Responsive3.css";

const images = [
  "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0", 
  "https://images.unsplash.com/photo-1552410260-0fd9b577afa6",
  "https://images.unsplash.com/photo-1517849845537-4d257902454a", 
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee", 
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131", 
];


const DemoCarousel = () => {
  return (
    <div style={{ width: "90%", margin: "50px auto" }}>
      <h1>3. React-Responsive Slider</h1>

      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={true}
        showStatus={false}
        emulateTouch
      >
        {images.map((img, i) => (
          <div key={i}>
            <img src={img} alt={`slide-${i}`} className="resp-img" />
            {/* <p className="legend">Product {i + 1}</p> */}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default DemoCarousel;
