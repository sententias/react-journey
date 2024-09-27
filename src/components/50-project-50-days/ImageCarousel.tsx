import React, { useEffect, useState } from 'react';
import ImageCarouselWrapper from './css/ImageCarouselWrapper.ts';

const DURATION = 2000;

export const ImageCarousel = () => {
  const imgURL = [
    '/assets/images/picture01.png',
    '/assets/images/picture02.jpg',
    '/assets/images/picture03.jpg',
    '/assets/images/picture04.jpg'
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const prevIndex = () => {
    setActiveIndex((prev) => (prev - 1 + imgURL.length) % imgURL.length);
  };

  const nextIndex = () => {
    setActiveIndex((prev) => (prev + 1) % imgURL.length);
  };
  
  useEffect(() => {
    const activeInter = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % imgURL.length);
    }, DURATION);
    return () => clearInterval(activeInter);
  }, [activeIndex]);

  return (
    <ImageCarouselWrapper>
      <div className='show'>
        {imgURL.map((url, index) => (
          <div
            key={url}
            style={{
              backgroundImage: `url(${url})`,
              transform: `translateX(${(index - activeIndex) * 30}vw)`
            }}
            className='carousel-image'
          ></div>
        ))}
      </div>
      <div className='controller'>
        <button
          className='button prev'
          onClick={prevIndex}
        >
          前一张
        </button>
        <button
          className='button next'
          onClick={nextIndex}
        >
          后一张
        </button>
      </div>
    </ImageCarouselWrapper>
  );
};

export default ImageCarousel;
