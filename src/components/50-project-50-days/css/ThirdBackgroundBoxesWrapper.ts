import styled from 'styled-components';

const ThirdBackgroundBoxesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 200px); /* 每列 200px */
  grid-template-rows: repeat(4, 200px); /* 每行 200px */
  gap: 0;
  width: 800px; /* 总宽度 */
  height: 800px; /* 总高度 */
  transition: 1s ease-out;

  &.active {
    gap: 50px;
  }
`;

const Boxes = styled.div<{ $row: number; $col: number }>`
  background-image: url('/assets/images/picture22.jpg'); /* 替换为你的图片路径 */
  background-size: 800px 800px; /* 确保背景图像与图片大小一致 */
  width: 200px; /* 每个 div 的宽度 */
  height: 200px; /* 每个 div 的高度 */
  background-repeat: no-repeat;
  position: relative;
  transition: 1s ease-out;

  &:after {
    content: '';
    background-color: lightgreen;
    position: absolute;
    top: 8px;
    right: -15px;
    height: 100%;
    width: 15px;
    transform: skewY(45deg);
  }
  &:before {
    content: '';
    background-color: lightgreen;
    position: absolute;
    left: 8px;
    bottom: -15px;
    height: 15px;
    width: 100%;
    transform: skewX(45deg);
  }

  &.active {
    transform: rotate(720deg);
  }

  /* 根据在网格中的位置设置背景定位 */
  ${({ $row, $col }) => `
    background-position: ${-$col * 200}px ${-$row * 200}px;
  `}
`;

export { ThirdBackgroundBoxesWrapper, Boxes };
