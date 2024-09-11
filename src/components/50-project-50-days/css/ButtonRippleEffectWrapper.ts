import styled from 'styled-components'

const ButtonRippleEffectWrapper = styled.div<{
  $mousePosition: { x: number; y: number }
}>`
  @keyframes anim {
    0% {
      transform: translate(-50%, -50%) scale(0);
      opacity: 0;
    }

    50% {
      opacity: 1;
    }

    100% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0;
    }
  }

  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  background-color: black;

  a {
    position: relative;
    padding: 20px 60px;
    background-color: rgba(45, 45, 45, 1);
    border-radius: 50px;
    color: #999;
    font-size: 1.5em;
    text-decoration: none;
    overflow: hidden;

    &::after {
      content: '';
      background-color: rgba(45, 45, 45, 0.8);
      position: absolute;
      inset: 2px;
      border-radius: 50px;
    }
  }

  a:hover {
    color: var(--clr);
    text-shadow: 0 0 15px var(--clr), 0 0 40px var(--clr);
    cursor: pointer;
  }

  a span {
    position: relative;
    z-index: 1;
    letter-spacing: 0.2rem;
  }

  .radiate {
    position: absolute;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 200px;
    background: radial-gradient(var(--clr), transparent, transparent);
  }

  .circle {
    width: 500px;
    height: 500px;
    /* border: 4px solid rgba(255,0,0,0.3); */
    background-color: rgba(255, 0, 255, 0.3);
    border-radius: 50%;
    position: absolute;
    animation: anim var(--time) ease-in;
    opacity: 0;
    left: 50%;
    top: 50%;
  }
`

export default ButtonRippleEffectWrapper
