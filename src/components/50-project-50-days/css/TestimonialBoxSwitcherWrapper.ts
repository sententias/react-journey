import styled, { keyframes } from 'styled-components';

// 定义进度条动画
const progress = () => keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const TestimonialBoxSwitcherWrapper = styled.div<{
  $duration: number;
}>`
  user-select: none;

  .box {
    width: 50vw;
    min-height: 30vh;
    background-color: lightsalmon;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 30px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  .progress-bar {
    width: 100%;
    // 进度条的高度
    height: 10px;
    // 进度条的背景色
    background-color: white;
    border-radius: 5px;
    overflow: hidden;
    // 调整进度条和其他内容的间距
    margin-bottom: 20px;

    // 进度条填充的样式
    &::before {
      content: '';
      display: block;
      height: 100%;
      // 进度条填充的颜色
      background-color: yellowgreen;
      animation: ${() => progress()} ${(props) => props.$duration}ms linear;
    }
  }

  .content {
    flex: 1;
    padding: 2rem 2rem 0 2rem;
    color: black;
  }

  .avatar {
    width: 3vw;
    height: 3vw;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      inset: 2px;
      background-image: url('assets/images/minilogo.png');
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }
  }
`;

export default TestimonialBoxSwitcherWrapper;
