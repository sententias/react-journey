import React, { useState } from 'react';
import HoverboardWrapper from './css/HoverboardWrapper.ts';
import styled from 'styled-components';

// HoverSquare方块行数或者列数
const SQUARE_LENGTH = 30;

export const Hoverboard = () => {
  const array = Array.from(
    { length: SQUARE_LENGTH * SQUARE_LENGTH },
    (_, index) => index
  );

  return (
    <HoverboardWrapper $square-length={SQUARE_LENGTH}>
      {Array.from(array).map((item) => (
        <HoverSquare key={item} />
      ))}
    </HoverboardWrapper>
  );
};

const HoverSquare = () => {
  const [color, setColor] = useState('#ffffff');

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const convertHexToRgba = (hex: string) => {
    let r = 0,
      g = 0,
      b = 0;

    if (hex.length === 7) {
      r = parseInt(hex[1] + hex[2], 16);
      g = parseInt(hex[3] + hex[4], 16);
      b = parseInt(hex[5] + hex[6], 16);
    }

    return `${r}, ${g}, ${b}`;
  };

  const glow = () => {
    setColor(convertHexToRgba(getRandomColor()));
  };

  return (
    <HoverSquareWrapper
      onMouseEnter={glow}
      $color={color}
    />
  );
};

const HoverSquareWrapper = styled.div<{ $color: string }>`
  width: 1rem;
  height: 1rem;
  background-color: #fff;
  user-select: none;
  transition: 2s ease-out;
  border: 1px solid lightgray;
  &:hover {
    transition: 0s ease-out;
    background-color: ${(props) => `rgb(${props.$color})`};
    box-shadow: 0 4px 8px 0 ${(props) => `rgba(${props.$color},0.4)`},
      0 6px 20px 0 ${(props) => `rgba(${props.$color},0.2)`};
  }
`;

export default Hoverboard;
