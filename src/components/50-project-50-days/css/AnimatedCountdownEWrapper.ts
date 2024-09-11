import styled from 'styled-components';

const AnimatedCountdownEWrapper = styled.div<{ $duration: number }>`
  @keyframes in {
    0% {
      transform: translate(-50%, -50%) rotate(120deg);
    }
    30% {
      transform: translate(-50%, -50%) rotate(-20deg);
    }
    60% {
      transform: translate(-50%, -50%) rotate(10deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
  }

  @keyframes out {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    60% {
      transform: translate(-50%, -50%) rotate(20deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(-120deg);
    }
  }

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h3 {
    letter-spacing: 0.1rem;
    margin: 0;
  }

  .countdown {
    position: relative;
    width: 100%;
    height: 1.5rem;
    overflow: hidden;
    color: lightsalmon;
    text-align: center;
    text-shadow: 2px 2px 4px rgba(255, 160, 122, 0.5);

  }

  .number {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(120deg);
    transform-origin: bottom center;
    font-size: 1.5rem;
  }

  .active {
    &.in {
      animation: ${(props) => `in ${props.$duration}ms ease-out`};
    }

    &.out {
      animation: ${(props) => `out ${props.$duration}ms ease-out`};
    }
  }

  .go {
    border: 0px;
    width: 5rem;
    height: 1.5rem;
    background-color: lightsalmon;
    color:white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    cursor: pointer;
  }
`;

export default AnimatedCountdownEWrapper;
