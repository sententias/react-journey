import styled from 'styled-components'

const FormInputWaveWrapper = styled.div`
  background-color: #2a4e6c;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 20vw;

  h1 {
    text-align: center;
    margin-bottom: 20px;
    color: #fff;
  }

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    position: absolute;
  }

  input {
    width: 100%;
    padding: 8px;
    border: 0px;
    background-color: #2a4e6c;
    border-bottom: 2px solid #add8e6;
    box-sizing: border-box;
    color: #fff;

    &:focus {
      border: 0px;
      background-color: #2a4e6c;
      border-bottom: 2px solid #add8e6;
      border-color: #007bff;
      outline: none;
      box-shadow: 0 8px 5px -5px rgba(0, 123, 255, 0.5);
    }
  }

  button {
    width: 100%;
    padding: 10px;
    background-color: #add8e6;
    border: none;
    border-radius: 4px;
    margin-top: 40px;
    color: #fff;
    font-size: 16px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }

  .form-group {
    margin-top: 40px;
    margin-bottom: 15px;
    position: relative;
  }

  .wave {
    color: #fff;
    user-select: none;
    transition: transform 0.5s ease,color 0.5s ease,font-size 0.3s ease; 
    display: inline-block;

    &.active {
      transform: translateY(-30px);
      font-size: smaller;
      color: #add8e6;
      /* transition: transform 0.5s ease;  */
    }
  }

`

export default FormInputWaveWrapper
