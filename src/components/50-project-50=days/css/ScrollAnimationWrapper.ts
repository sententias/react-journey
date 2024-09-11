import styled from 'styled-components'

const ScrollAnimationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;

  @keyframes appear {
    from {
      opacity: 0;
      transform: translateX(-30vw);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes disappear {
    from {
      opacity: 1;
      transform: translateX(0);
    }
    to {
      opacity: 0;
      transform: translateX(-30vw);
    }
  }

  .content-card {
    /* animation-timeline: view();
    animation-range: entry 0% ; */

    width: 300px;
    height: 150px;
    background-color: skyblue;
    margin: 20px;
    box-sizing: border-box;
    opacity: 0;
    transform: translateX(-30vw);
    animation: disappear 0.5s linear;
  }

  .content-card.active {
    opacity: 1;
    transform: translateX(0);
    animation: appear 0.5s linear;
  }
`

export default ScrollAnimationWrapper
