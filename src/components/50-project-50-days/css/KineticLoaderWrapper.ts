import styled from 'styled-components'

const KineticLoaderWrapper = styled.div<{ $duration: number }>`
  position: relative;

  @keyframes rotateA {
    0%,
    25% {
      transform: rotate(90deg);
    }
    50%,
    75% {
      transform: rotate(270deg);
    }
    100% {
      transform: rotate(450deg);
    }
  }

  @keyframes rotateB {
    0%,
    25% {
      transform: rotate(0deg);
    }
    50%,
    75% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .tri-angle {
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 0;
    border-left: 2rem solid transparent;
    border-right: 2rem solid transparent;
    border-top: 2rem solid transparent;
    border-bottom: 2rem solid lightgreen;

    &.A {
      animation: rotateA ${(props) => props.$duration}ms linear infinite;
    }
    &.B {
      animation: rotateB ${(props) => props.$duration}ms linear infinite;
      animation-delay: ${(props) => props.$duration / 4}ms;
    }
  }
`

export default KineticLoaderWrapper
