/* VerifyAccountUiWrapper.ts */
import styled from 'styled-components';

const VerifyAccountUiWrapper = styled.div`
  .box {
    border: 2px solid black;
    width: 40rem;
    height: 28rem;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
  }

  .interduce-box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .header1 {
    color: black;
    font-size: 1.5rem;
  }

  .description {
    text-align: center;
  }

  .input-box {
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 0 2rem;
    box-sizing: border-box;
  }

  .number {
    flex: 1;
    height: 5rem;
    width: 5rem;
    border: 2px solid black;
    font-size: 2rem;
    text-align: center;
    appearance: textfield; 
  }

`;

export default VerifyAccountUiWrapper;
