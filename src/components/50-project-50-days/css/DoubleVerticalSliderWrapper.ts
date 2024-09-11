import styled from 'styled-components'

const DoubleVerticalSliderWrapper = styled.div`
  align-self: flex-start;
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;

  .left-content,
  .right-content {
    position: relative;
    flex: 1;
    overflow: hidden;
  }

  .left-content {
    display: flex;
    flex-direction: column;
  }

  .left-background {
    flex: 1;
  }

  .left-background {
    background-color: lightblue;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .right-background-box {
    height: 400vh;
    background-color: lemonchiffon;
    transition: transform 0.5s ease-in-out;
    position: absolute;
    inset: 0;
  }

  .right-background {
    height: 100vh;
    background-position: center;
    background-size: cover;
    position: relative;
    margin: 0;
    transition: transform 0.7s ease-in-out;
  }

  .iconfont {
    position: absolute;
    font-size: 1.5rem;
    user-select: none;
    cursor: pointer;
    color: white;
  }

  .icon-mti-jiantouxia1 {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(100%);
    &::after {
      content: '';
      position: absolute;
      right: 0;
      left: -2px;
      top: -5px;
      bottom: -5px;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: -1;
      border-radius: 5px 0 0 5px;
    }
  }

  .icon-mti-jiantoushang {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-100%);
    &::after {
      content: '';
      position: absolute;
      left: 0;
      right: -2px;
      top: -5px;
      bottom: -5px;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: -1;
      border-radius: 0 5px 5px 0;
    }
  }
`

export default DoubleVerticalSliderWrapper
