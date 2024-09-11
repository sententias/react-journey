import styled from 'styled-components';

const PasswordStrengthBackgroundWrapper = styled.div<{ $length: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 100vh;
  background-image: url('assets/images/picture21.jpg');
  background-position: center;
  background-size: cover;
  width: 100%;
  user-select: none;
  letter-spacing: 0.1rem;
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    /* 使用父元素的背景 */
    background: inherit;
    filter: blur(${(props) => 8 - props.$length}px);
  }
  .box {
    position: relative;
    width: 30rem;
    min-height: 20rem;
  }

  .box-bright {
    position: absolute;
    inset: -5px;
    /* 通过通过密码长度控制径向渐变的角度实现进度条效果 */
    /* 密码长度小于4时红色，小于8时黄色，其他绿色 */
    background: conic-gradient(
      ${(props) =>
          props.$length < 4 ? 'red' : props.$length < 8 ? 'yellow' : 'green'}
        0 ${(props) => (360 / 12) * props.$length}deg,
      transparent ${(props) => (360 / 12) * props.$length}deg
    );
  }

  .box .box-bright:nth-child(1) {
    filter: blur(3px);
  }

  .box .box-bright:nth-child(2) {
    filter: blur(6px);
  }

  .content {
    position: absolute;
    inset: 0;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
    box-sizing: border-box;
  }

  .header1 {
    font-size: 2rem;
    color: black;
  }

  .header2 {
    font-size: 0.8rem;
    color: gray;
  }

  .form-box {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    width: 100%;
  }

  form {
    width: 70%;
  }

  .form-box .input-box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 1rem;
  }

  label {
    align-self: flex-start;
  }
  input {
    padding: 0.5rem;
    width: 100%;
    box-sizing: border-box;
  }

  .button {
    margin-top: 2rem;
    width: 100%;
    background-color: black;
    color: #fff;
    padding: 0.5rem;
    cursor: pointer;
    border-radius: 5px;
    box-sizing: border-box;
  }
`;

export default PasswordStrengthBackgroundWrapper;
