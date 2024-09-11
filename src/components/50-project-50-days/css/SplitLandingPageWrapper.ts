import styled from 'styled-components'

const SplitLandingPageWrapper = styled.div`
  align-self: flex-start;
  display: flex;
  height: 100vh;
  width: 100vw;

  .left,
  .right {
    flex: 1;
    position: relative;
    z-index: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .left {
    background-color: #bbb;
    background-image: url('assets/images/picture04.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    transition: flex 0.5s ease-in;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(128, 128, 128, 0.4);
      z-index: 1;
    }

    &.active {
      flex: 1.5;
      transition: flex 0.5s ease-in;
    }
  }

  .right {
    background-color: skyblue;
    background-image: url('assets/images/picture05.png');
    background-repeat: no-repeat;
    background-size: cover;
    transition: flex 0.5s ease-in;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(128, 128, 128, 0.4);
      z-index: 1;
    }

    &.active {
      flex: 1.5;
      transition: flex 0.5s ease-in;
    }
  }
  
  .center {
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h1 {
    color: white;
    font-size: 3rem;
    font-weight: bolder;
    user-select: none;
  }

  .click-button {
    border: 3px white solid;
    background-color: transparent;
    color: white;
    font-size: 3rem;
    font-weight: bolder;
    user-select: none;
    &:hover {
      background-color: rgb(128, 128, 128);
      border-color: rgb(128, 128, 128);
    }
  }

`

export default SplitLandingPageWrapper
