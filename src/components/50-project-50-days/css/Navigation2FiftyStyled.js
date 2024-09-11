import styled from 'styled-components';

const Navigation2FiftyWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: gray;
  width: 200px; 
  /* padding: 20px;  */
  box-sizing: border-box; /* 内边距和边框计入宽度和高度 */
  border-right: 1px solid black; 
  z-index: 99;
  overflow-y: auto;

  /* 通用滚动条样式 */
  scrollbar-width: thin; /* 滚动条宽度 */
  scrollbar-color: #fff #444; /* thumb颜色和轨道颜色 */

  img {
    height: 50px;
    display: inline;
    user-select: none;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  li {
    margin: 10px 0; 
    width: 200px;
    border: 1px solid #666;
    background-color: #666;
  }

  a {
    text-decoration: none;
    color: white; 
    padding: 5px;
    display: block;
    border: 1px solid transparent; 
    transition: background-color 0.3s ease; 
    overflow-wrap: break-word; 
    user-select: none;
  }

  a:hover {
    background-color: lightgray; 
  }

  h2 {
    flex: 1;
    /* justify-self: center; */
    align-self: center;
    color: #fff;
    margin: 0 auto;
    display: inline;
    text-align: center;
    transform: translateX(-10%);
    user-select: none;
  }

  .nav-header {
    width: 200px;
    height:50px;
    background-color: #000;
    display: flex;
  }

  .isActive {
    background-color: darkmagenta;
  }

  
`;

export default Navigation2FiftyWrapper;
