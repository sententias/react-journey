import styled from 'styled-components'

const duration = '1s'

const BackgroundSliderWrapper = styled.div<{ url: string; key?: number }>`
  @keyframes blurAnimation {
    from {
      filter: blur(10px);
    }
    to {
      filter: blur(0px);
    }
  }

  @keyframes scaleAnimation {
    from {
      transform: scale(2);
    }
    to {
      transform: scale(1);
    }
  }

  align-self: flex-start;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${(props) => (props.url ? `url(${props.url})` : 'gainsboro')};
    background-repeat: no-repeat;
    /* background-size: cover; */
    background-position: center;
    background-size: 100vw 100vh;
    /* background: inherit; */
    animation: blurAnimation ${duration} ease-out;
  }

  .slider-container {
    position: absolute;
    width: 70%;
    height: 60%;
    border-radius: 10px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
    box-shadow: 0 0 0 100vw rgba(0, 0, 0, 0.7);

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: ${(props) => (props.url ? `url(${props.url})` : '')};
      background-position: center;
      background-size: 100vw 100vh;
      background-repeat: no-repeat;
      /* background-size: cover; */
      animation: scaleAnimation ${duration} ease-out;
    }
  }

  .prev,
  .next {
    font-size: 50px;
    color: white;
    position: absolute;
    user-select: none;
    &::before {
      /* position: absolute; */
      background-color: rgba(127, 127, 127, 0.6);
      padding: 10px 0;
      border-radius: 5px;
      user-select: none;
    }
  }

  .prev {
    left: 0%;
    top: 50%;
    transform: translate(0, -50%);
  }

  .next {
    right: 0%;
    top: 50%;
    transform: translate(0, -50%);
  }
`

export default BackgroundSliderWrapper
