import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./keen2.css"

export default () => {
  const [slider1Ref] = useKeenSlider({
    slides: {
      origin: "center",
    },
    selector: ".first > .keen-slider__slide",
  })

  const [slider2Ref] = useKeenSlider({
    rubberband: false,
    slides: {
      perView: 1.3,
    },
  })

  const [slider3Ref] = useKeenSlider({
    rubberband: false,
    slides: {
      perView: 1.3,
    },
    vertical: true,
  })

  return (
    <div><h1 style={{marginTop: "50px"}}>2. Nested Keen Slider</h1>
    <div ref={slider1Ref} className="keen-slider first">
      <div className="keen-slider__slide number-slide1">Slider 1</div>
      <div
        className="keen-slider__slide number-slide2"
        style={{ minWidth: "100%", maxWidth: "100%" }}
      >
        <div
          ref={slider2Ref}
          className="keen-slider"
          style={{ minWidth: "100%", maxWidth: "100%" }}
        >
          <div className="keen-slider__slide number-slide1">Slider 2</div>
          <div className="keen-slider__slide number-slide2">Slider 3</div>
          <div className="keen-slider__slide number-slide3">Slider 4</div>
        </div>
      </div>
      <div className="keen-slider__slide number-slide3">
        <div
          ref={slider3Ref}
          className="keen-slider"
          style={{ height: 200, width: "100%" }}
        >
          <div className="keen-slider__slide number-slide1">Slider 5</div>
          <div className="keen-slider__slide number-slide2">Slider 6</div>
          <div className="keen-slider__slide number-slide3">Slider 7</div>
        </div>
      </div>
      <div className="keen-slider__slide number-slide4">Slider 8</div>
    </div>
    </div>
  )
}


