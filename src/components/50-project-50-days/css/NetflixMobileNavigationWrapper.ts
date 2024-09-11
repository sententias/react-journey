import styled from 'styled-components';

const NetflixMobileNavigationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  position: relative;
  user-select: none;
  .logo {
    width: 20vw;
    height: 15vh;
    background-image: url('assets/images/logo.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .icon-caidan {
    position: absolute;
    left: 1vw;
    top: 1vh;
    font-size: 1.5rem;
    color: black;
    cursor: pointer;
    &:hover {
      color: lightsalmon;
    }
  }

  .nav {
    position: absolute;
    left: 0;
    height: 100%;
    transform: translateX(-100%);
    transition: transform 300ms ease-out;

    &.animation-red {
      background-color: red;
      width: 26vw;
      transition-delay: 200ms;
      &.active {
        transform: translateX(0);
        transition-delay: 0ms;
      }
    }

    &.animation-black {
      background-color: black;
      z-index: 1;
      width: 23vw;
      transition-delay: 100ms;
      &.active {
        transform: translateX(0);
        transition-delay: 100ms;
      }
    }

    &.animation-content {
      &.active {
        transform: translateX(0);
        transition-delay: 200ms;
      }
      transition-delay: 0ms;
      width: 20vw;
      background-color: white;
      z-index: 2;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;

      .icon-mti-guanbi {
        position: absolute;
        right: 1vw;
        top: 3vh;
        font-size: 1rem;
        color: black;
        cursor: pointer;
        &:hover {
          color: lightsalmon;
        }
      }

      .logo {
        width: 60%;
        background-image: url('assets/images/logo.png');
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
      }

      .item {
        margin-left: 2rem;
        margin-top: 0.5rem;
      }

      .item2 {
        margin-left: 3rem;
        margin-top: 0.5rem;
      }
    }
  }
`;

export default NetflixMobileNavigationWrapper;
