import React, { useState } from 'react';
import {
  ThirdBackgroundBoxesWrapper,
  Boxes
} from './css/ThirdBackgroundBoxesWrapper.ts';
import { Button } from 'antd';

const ThirdBackgroundBoxes = () => {
  const [active, setActive] = useState(false);

  const handleButtonClick = () => {
    setActive(prevActive => !prevActive);
  };

  return (
    <>
      <Button
        type='primary'
        className='button'
        style={{
          position: 'fixed',
          top: '30px',
          left: '50%',
          zIndex: 1
        }}
        onClick={handleButtonClick}
      >
        点我观看动画
      </Button>
      <ThirdBackgroundBoxesWrapper className={active ? 'active' : ''}>
        {Array.from({ length: 16 }, (_, index) => {
          const row = Math.floor(index / 4); 
          const col = index % 4; 
          return (
            <Boxes
              key={index}
              $row={row}
              $col={col}
              className={active ? 'active' : ''}
            />
          );
        })}
      </ThirdBackgroundBoxesWrapper>
    </>
  );
};

export default ThirdBackgroundBoxes;
