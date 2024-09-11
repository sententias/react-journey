import React, { useState, useEffect } from 'react';
import RandomImageGeneratorWrapper from './css/RandomImageGeneratorWrapper.ts';

const PICTURE_NUMBER = 30;
const BASE_URL = 'https://picsum.photos/';

export const RandomImageGenerator = () => {

    
  return (
    <RandomImageGeneratorWrapper>
      {Array.from({ length: PICTURE_NUMBER }).map((_, index) => (
        <div
          key={index}
          className='box'
          style={{ backgroundImage: `url(${BASE_URL+Math.floor(Math.random() * 1000)})` }}
        ></div>
      ))}
    </RandomImageGeneratorWrapper>
  );
};

export default RandomImageGenerator;
