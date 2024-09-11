import styled from 'styled-components'

const AnimatedNavigationWrapper = styled.div`
  align-content: space-between;
  display: flex;
  flex-direction: column;
  width: auto;
  height: 100vh;
  overflow: hidden;
  position: relative;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(1800deg);
    }
  }

  .top {
    background-color: greenyellow;
    flex: 1;
    width: 100vw;
  }

  .bottom {
    background-color: skyblue;
    flex: 1;
    width: 100vw;
  }

  .nav {
    background-color: white;
    position: absolute;
    width: 30px;
    padding: 0 8px;
    height: 10vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: space-around;
    transition: width 0.5s ease-in;

    &.active {
      width: 20vw;
    }
  }

  .icon-caidan {
    font-size: 30px;
    user-select: none;
    cursor: pointer;
    justify-self: flex-end;
  }

  .tab {
    display: none;
    &.active {
      display: block;
      animation: spin 0.5s linear;
    }
  }
`

export default AnimatedNavigationWrapper
