import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const flowers = [
  "https://images.unsplash.com/photo-1501004318641-b39e6451bec6", 
  "https://images.unsplash.com/photo-1502082553048-f009c37129b9", 
  "https://images.unsplash.com/photo-1490750967868-88aa4486c946", 
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93", 
];

const Splide1 = () => {
  return (
    <div>
      <h1 className="splide-heading">1. React Splide</h1>

      <Splide
        aria-label="Flower Slider"
        options={{
          type: 'loop',
          autoplay: true,
          interval: 1500,
          pauseOnHover: true,
        }}
      >
        {flowers.map((img, i) => (
          <SplideSlide key={i}>
            <img
              src={img}
              alt={`flower-${i}`}
              style={{ width: "100%", height: "400px", objectFit: "cover" }}
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Splide1;
