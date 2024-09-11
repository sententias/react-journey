import styled from 'styled-components';

const FeedbackUiFesignWrapper = styled.div`
  .choose-box,
  .feedback-box {
    width: 15rem;
    height: 10rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
    border-radius: 5px;
    text-align: center;
  }

  .choose-box {
    user-select: none;
    .choose {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      .choice{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-size: 0.8rem;
        cursor: pointer;
        &.active {
          color: lightsalmon;
        }

        &:hover{
          color: lightsalmon;
        }
      }

      i {
        font-size: 2rem;

      }
    }

    .button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 8rem;
      height: 2rem;
      background-color: #555;
      color: #fff;
      border-radius: 5px;
      cursor: pointer;
    }
  }

  .feedback-box{
    color: black;
    .iconfont {
      color: red;
      font-size: 2rem;
    }
    .content{
      font-size: .8rem;
      color: gray;
    }
  }
`;

export default FeedbackUiFesignWrapper;
