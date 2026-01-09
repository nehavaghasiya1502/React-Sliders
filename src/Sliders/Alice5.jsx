import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import s1 from '../assets/splide1.png';
import s2 from '../assets/splide2.png';
import s3 from '../assets/splide3.png';
import s4 from '../assets/splide4.png';

const items = [
  <div className="item" data-value="1">
    <img className='imgs' style={{ width: "100%",height: "500px"}} src={s1} alt="img 1" />
  </div>,
  <div className="item" data-value="2">
    <img className='imgs' style={{ width: "100%",height: "500px"}} src={s2} alt="img 2" />
  </div>,
  <div className="item" data-value="3">
    <img className='imgs' style={{ width: "100%",height: "500px"}} src={s3} alt="img 3" />
  </div>,
  <div className="item" data-value="4">
    <img className='imgs'style={{ width: "100%",height: "500px"}} src={s4} alt="img 4" />
  </div>,
];

const renderSlideInfo = ({ item, itemsCount }) => {
  return `${item}\\${itemsCount}`;
};

const renderDotsItem = ({ isActive }) => {
  return isActive ? 'x' : 'o';
};

const renderPrevButton = ({ isDisabled }) => {
  return <span style={{ opacity: isDisabled ? '0.5' : 1 }}>&lt;</span>;
};

const renderNextButton = ({ isDisabled }) => {
  return <span style={{ opacity: isDisabled ? '0.5' : 1 }}>&gt;</span>;
};

const renderPlayPauseButton = ({ isPlaying }) => {
  return isPlaying ? 'PAUSE' : 'PLAY';
};

const Alice5 = () => {
  return (
    <div style={{marginTop: "50px"}}><h1>5. React-Alice</h1>
      <AliceCarousel
        mouseTracking
        items={items}
        autoPlayControls
        disableSlideInfo={false}
        renderSlideInfo={renderSlideInfo}
        renderDotsItem={renderDotsItem}
        renderPrevButton={renderPrevButton}
        renderNextButton={renderNextButton}
        renderPlayPauseButton={renderPlayPauseButton}
      />
    </div>
  )
}

export default Alice5;
