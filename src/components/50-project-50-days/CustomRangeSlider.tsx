import React, { useState } from 'react';
import CustomRangeSliderWrapper from './css/CustomRangeSliderWrapper.ts';

export const CustomRangeSlider = () => {
  const [value, setValue] = useState(0);

  const userSlid = (event) => {
    setValue(event.target.value);
  };

  return (
    <CustomRangeSliderWrapper>
      <div className='slider-container'>
        <div
          className='slider-value'
          style={{ left: `${value}%`, transform: 'translateX(-50%)' }}
        >
          {value}
        </div>
        <input
          type='range'
          id='range'
          min='0'
          max='100'
          value={value}
          onChange={userSlid}
        />
      </div>
    </CustomRangeSliderWrapper>
  );
};

export default CustomRangeSlider;
