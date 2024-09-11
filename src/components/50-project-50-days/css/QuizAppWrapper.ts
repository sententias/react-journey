import styled from 'styled-components';

const QuizAppWrapper = styled.div`
  user-select: none;
  .box {
    width: 50vw;
    min-height: 30vh;
    background-color: white;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 30px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  .content {
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .button {
    background-color: lightsalmon;
    color: white;
    padding: 0.3rem 1rem;
    border-radius: 5px;
    margin-top: 1rem;
    user-select: none;
    cursor: pointer;
  }

  .choice {
  }
`;

export default QuizAppWrapper;
