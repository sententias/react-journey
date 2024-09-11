import styled from 'styled-components'

const DrinkWaterWrapper = styled.div<{precent: number}>`
  display: flex;
  flex-direction: column;
  align-self: start;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;

  .total-water {
    background-color: #144fc6;
    width: 10vw;
    height: 40vh;
    border-radius: 0 0 30px 30px;
    position: relative;
    overflow: hidden;
    user-select: none;

    &.smaller {
      width: 2vw;
      height: 10vh;
      border-radius: 0 0 15px 15px;
    }
  }

  .content-water {
    position: absolute;
    inset: 2px;
    border-radius: 0 0 28px 28px;
    background-color: #6ab3f8;
    user-select: none;

    &.smaller {
      cursor: pointer;
      border-radius: 0 0 13px 13px;
    }
  }
  .drinked-water {
    background-color: #fff;
    left: 0;
    top: 0;
    width: 100%;
    /* height: calc(12.5%); */
    height: ${(props) => (`${100 - ( ( props.precent + 1 ) * 12.5 )}%`)};
    user-select: none;
    border-radius: ${(props) => (props.precent === -1 ? '0 0 28px 28px' : '0')};
    /* border-radius: 0 0 28px 28px;  */

    &.smaller {
      cursor: pointer;
      height: calc(100%);
      border-radius: 0 0 13px 13px;
    }

    &.active {
      height: calc(0%);
    }
  }

  .cups {
    display: grid;
    gap: 10px;
    width: 15vw;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr 1fr;
    justify-content: space-around;
    user-select: none;
  }
`

export default DrinkWaterWrapper
