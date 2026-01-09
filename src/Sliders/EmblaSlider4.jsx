import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import "./EmblaSlider4.css";

const slides = [
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  "https://images.unsplash.com/photo-1585386959984-a4155224a1ad",
];

const EmblaSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  // autoplay
  useEffect(() => {
    if (!emblaApi) return;
    const autoPlay = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);
    return () => clearInterval(autoPlay);
  }, [emblaApi]);

  return (
    <div className="embla-wrapper">
      <h1>4. Embla Slider</h1>

      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((img, i) => (
            <div className="embla__slide" key={i}>
              <img src={img} alt="product" className="embla__img" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaSlider;
