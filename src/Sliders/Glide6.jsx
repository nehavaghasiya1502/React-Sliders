import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";

const images = [
  "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
  "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9",
  "https://images.unsplash.com/photo-1482049016688-2d3e1b311543",
];

const Glide6 = () => {
  useEffect(() => {
    const glide = new Glide("#intro", {
      type: "carousel",
      perView: 4,
      focusAt: "center",
      autoplay: 1000,
      breakpoints: {
        800: { perView: 2 },
        480: { perView: 1 },
      },
    });

    glide.mount();

    return () => glide.destroy(); 
  }, []);

  return (
    <div style={{marginTop: "50px"}}>
      <h1>6. Glide Slider</h1>

      <div className="glide" id="intro">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {images.map((img, i) => (
              <li className="glide__slide" key={i}>
                <img
                  src={img}
                  alt=""
                  style={{
                    width: "100%",
                    height: "280px",
                    objectFit: "cover",
                    borderRadius: "12px",
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Glide6;
