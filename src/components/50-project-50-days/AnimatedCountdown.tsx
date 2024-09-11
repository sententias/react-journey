import React, { useEffect, useState } from 'react';
import AnimatedCountdownEWrapper from './css/AnimatedCountdownEWrapper.ts';

const DURATION = 500;
const COUNTDOWN_SECOND = 3;

export const AnimatedCountdown = () => {
  const [isIn, setIsIn] = useState(true);
  const [activeIndex, setActiveIndex] = useState(2);
  const [isReady, setIsReady] = useState(false);

  const ready = () => {
    setIsReady(false);
  };

  useEffect(() => {
    setIsIn(true);
    setActiveIndex(2);
    const isInInterval = setInterval(() => {
      setIsIn((prev) => !prev);
    }, DURATION);

    const ActiveIndexInterval = setInterval(() => {
      setActiveIndex(
        (prev) => (prev - 1 + COUNTDOWN_SECOND) % COUNTDOWN_SECOND
      );
    }, DURATION * 2);

    const isReadyTimeout = setTimeout(() => {
      setIsReady(true);
      clearInterval(isInInterval);
      clearInterval(ActiveIndexInterval);
    }, DURATION * 2 * COUNTDOWN_SECOND);

    return () => {
      clearInterval(isInInterval);
      clearInterval(ActiveIndexInterval);
      clearTimeout(isReadyTimeout);
    };
  }, [isReady]);

  return (
    <AnimatedCountdownEWrapper $duration={DURATION}>
      <div className='countdown'>
        {isReady ? (
          <div>Let's GO</div>
        ) : (
          Array.from({ length: COUNTDOWN_SECOND }).map((_, index) => (
            <span
              className={`number ${isIn ? 'in' : 'out'} ${
                index === activeIndex ? 'active' : ''
              }`}
            >
              {index + 1}
            </span>
          ))
        )}
      </div>
      {isReady ? (
        <button
          className='go'
          onClick={ready}
        >
          开始
        </button>
      ) : (
        <h3>准备开始</h3>
      )}
    </AnimatedCountdownEWrapper>
  );
};

export default AnimatedCountdown;
