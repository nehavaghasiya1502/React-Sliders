// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';

// export default () => {
//   return (
//     <Swiper
//       spaceBetween={50}
//       slidesPerView={3}
//       onSlideChange={() => console.log('slide change')}
//       onSwiper={(swiper) => console.log(swiper)}
//     >
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//       ...
//     </Swiper>
//   );
// };

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const images = [
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee", // nature road
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470", // mountains
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e", // lake
  "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0", // forest
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131", // cute cat
  "https://images.unsplash.com/photo-1507149833265-60c372daea22", // dog
];


const Swiper7 = () => {
  return (
    <div style={{ width: "90%", margin: "50px auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: 20 }}>
        7. React Swiper
      </h1>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <div
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
              }}
            >
              <img
                src={img}
                alt="food"
                style={{
                  width: "100%",
                  height: "280px",
                  objectFit: "cover",
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Swiper7;
