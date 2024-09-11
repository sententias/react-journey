import styled from 'styled-components'

const ProgressStepWrapper = styled.div`
  .progress-step-box {
    display: flex;
    flex-direction: row;
    width: 600px;
    justify-content: space-between;
    /* margin: 50px; */
    /* border: 20px solid grey; */
  }

  .circle {
    width: 50px;
    height: 50px;
    padding: 25px;
    user-select: none;
    border: 5px solid grey;
    box-sizing: border-box;
    border-radius: 50px;
    /* text-align: center; */
    display: flex;
    transition: border-color 0.3s ease-in;
  }

  .step {
    align-self: center;
    user-select: none;
    transform: translateX(-50%);
  }

  .stick {
    flex: 1;
    user-select: none;
    border: 2px solid grey;
    background-color: grey;
    height: 5px;
    margin-top: 25px;
    /* transform: translateX(100%) translateY(-35px); */
    transition: border-color 0.3s ease-in, background-color 0.3s ease-in;
  }

  .control-button {
    text-align: center;
    margin-top: 20px;
    user-select: none;
  }

  .button {
    margin: 10px;
    width: 100px;
    height: 35px;
    background-color: grey;
    border: 1px solid skyblue;
    border-radius: 5px;
    color: white;
    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
  }

  .isButtonActive {
    background-color: skyblue;
    cursor: pointer;
  }

.circle.is-circle-active {
  border-color: skyblue; 
  transition: border-color 0.3s ease-in; 
}

.stick.is-stick-active {
  border-color: skyblue; 
  background-color: skyblue; 
  transition: border-color 0.3s ease-in, background-color 0.3s ease-in; 
}
`

export default ProgressStepWrapper
