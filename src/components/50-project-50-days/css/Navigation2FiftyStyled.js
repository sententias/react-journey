import styled from 'styled-components';

const Navigation2FiftyWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: white;
  width: 15vw;
  box-sizing: border-box; /* 内边距和边框计入宽度和高度 */
  z-index: 99;
  overflow-y: auto;
  user-select: none;


  /* 滚动条宽度 */
  scrollbar-width: thin; 
  /* thumb颜色和轨道颜色 */
  scrollbar-color: #1677ff #fff; 

  .nav-header {
    width: 14vw;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 2rem;
    }

    .title {
      flex: 1;
      color: #61dafb;
      text-align: center;
      font-weight: bold;
    }

    i {
      font-size: 1.5rem;
      color: #61dafb;
      cursor: pointer;
      transition: color .5s ease-out;
      width: 1.5rem;
      &:hover{
        color:#1677ff;
      }
    }
  }

  .nav2f-content{
    width: 14vw;

    .ant-menu-submenu-title{
      border: 1px solid lightgray;
      &[aria-expanded='true']{
        border-color: #1890ff;
      }
    }

    
    .ant-menu-item {
      border: 1px solid lightgray;

      &.ant-menu-item-active {
        border-color: #1890ff;
        background-color: #e6f4ff;
      }

      &.ant-menu-item-selected {
        border-color: #1890ff;
      }

      .menu-link {
        &:hover {
          color: #1677ff;
        }
      }
    }


  }
`;

export default Navigation2FiftyWrapper;
