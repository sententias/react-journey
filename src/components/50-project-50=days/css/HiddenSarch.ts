import styled from 'styled-components'

// 使用 styled-components 创建组件
const HiddenSearchWrapper = styled.div`
  .icon-style {
    font-size: 30px;
    font-weight: 1000;
    color: white;
  }

  .search-box {
    height: fit-content;
    width: min-content;
    padding: 10px;
    background-color: skyblue;
    box-sizing: border-box;
    border-radius: 5px;
    cursor: pointer;
    user-select: none;
    display: flex;
  }

  .search-content {
    margin: 5px 0;
    height: 20px;
    width: 0px;
    visibility: hidden; 
    opacity: 0; 
    padding: 0px;
    transition: width 0.7s ease, opacity 0.3s ease, visibility 0.7s ease, border 0.1s ease;
    border-radius: 5px;
    border: black 0px solid;
    box-sizing: border-box;
    font-size: smaller;
  }

  .search-content::placeholder {
    color: #bbb;
    font-size: smaller;
  }

  .search-content.active {
    margin: 5px;
    width: 200px;
    padding: 10px 2px;
    border: black 1px solid;
    visibility: visible; /* 显示元素 */
    opacity: 1; /* 使元素不透明 */
  }
`

export default HiddenSearchWrapper
