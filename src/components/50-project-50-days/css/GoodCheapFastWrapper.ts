import styled from 'styled-components'

const GoodCheapFastWrapper = styled.div`
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2vh;

  .toggle {
    position: relative;
    display: flex;
    align-items: center;
    width: 150px;
    height: 34px;
    &input {
      opacity: 0;
      width: 0;
      height: 0;
    }
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    width: 80px;
    height: 34px;
    background-color: #ccc;
    transition: 0.4s;
    border-radius: 34px;

    &:before {
      position: absolute;
      content: '';
      height: 26px;
      width: 26px;
      border-radius: 50%;
      left: 4px;
      bottom: 4px;
      background-color: white;
      transition: 0.4s;
    }
  }

  input:checked {
    
    & + .slider {
      background-color: #2196f3;

      &:before {
        transform: translateX(46px);
      }
    }
  }

  .description {
    margin-left: 70px;
    font-size: 16px;
    color: #000;
  }
`

export default GoodCheapFastWrapper
