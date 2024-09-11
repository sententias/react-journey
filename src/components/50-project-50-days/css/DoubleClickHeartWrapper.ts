import styled from 'styled-components'

const DoubleClickHeartWrapper = styled.div`
  @keyframes heart {
    from{
      opacity: 1;
      transform: translate(-50% ,-50%) scale(1);
    }
    to{
      opacity: 0;
      transform: translate(-50% ,-50%) scale(2);
    }
  }

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  user-select: none;
  .pic {
    width: 27vw;
    height: 70vh;
    position: relative;
    background-position: center;
    background-size: cover;
    cursor: pointer;
  }

  .icon-xin {
    color: rgba(255, 0, 0, 0.9);
    font-size: 3rem;
    position: absolute;
    /* display: inline; */
    transform: translate(-50% ,-50%);
    animation: heart 1000ms ease-out;
  }
`

export default DoubleClickHeartWrapper
