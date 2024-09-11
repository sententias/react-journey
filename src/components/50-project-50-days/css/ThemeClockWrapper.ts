import styled from 'styled-components'

const ThemeClockWrapper = styled.div`
  align-self: flex-start;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 15vh;
  margin-top: 5vh;
  height: 80vh;
  
  .toggle {
    border: 2px solid gainsboro;
    border-radius: 5px;
    width: 10rem;
  }

  .iconfont {
    font-size: 1.5rem;
  }

  .clock {
    position: relative;
    /* background-color: lightblue; */
    width: 12rem;
    height: 12rem;
  }

  .needle {
    background-color: var(--clr,black);
    position: absolute;
    top: 50%;
    left: 50%;
    height: 3rem;
    width: 3px;
    transform-origin: bottom center;
    transition: 0.5s ease-in;
  }

  .hour {
  }

  .minute {
    height: 4rem;
  }

  .second {
    height: 5rem;
  }

  .center {
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: #000;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    border: 2px solid red;
    z-index: 1;
    transform: translate(-50%,-50%);
  }

  .date-time-container {
    text-align: center;
  }
`

export default ThemeClockWrapper
