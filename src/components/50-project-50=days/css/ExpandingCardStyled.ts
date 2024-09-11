import styled from 'styled-components'

const ExpandingCardWrapper = styled.div`
  .ExpandingCardBox {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 800px;
  }

  .mini-card {
    /* width: 100px; */
    height: 300px;
    margin: 10px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    flex: 0.5;
    /* display: flex; */
    /* align-items: flex-end; */
    padding: 10px;
    -webkit-transition: all 700ms ease-in;
  }

  .isActive {
    /* width:300px; */
    flex: 10;
    /* transition: flex 0.3s ease;  */
  }
`

export default ExpandingCardWrapper
