import styled from 'styled-components';

const MobileTabNavigationWrapper = styled.div`
  user-select: none;
  .mobile {
    width: 25vw;
    height: 70vh;
    background-color: #fff;
    border-radius: 5px;
    padding: 3px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
  }

  .image-box {
    position: relative;
    flex: 1;
    border-radius: 5px 5px 0 0;
    width: 100%;
    height: 100%;

    & .image {
      position: absolute;
      inset: 0;
      background-position: center;
      background-size: cover;
      border-radius: 5px 5px 0 0;
      transition: transform 500ms ease-out;
    }
  }

  .navigation {
    height: 3rem;
    width: 100%;
    border-radius: 0 0 5px 5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .tab {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    color: #777777;
    &.active {
      color: lightcoral;
    }

    &:hover{
      color: lightcoral;
    }

    & .iconfont {
      font-size: 1.5rem;
    }
    & .description {
      font-size: 0.6rem;
    }
  }
`;

export default MobileTabNavigationWrapper;
