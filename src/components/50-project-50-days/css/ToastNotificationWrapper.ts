import styled from 'styled-components'

const ToastNotificationWrapper = styled.div`
  align-self: flex-start;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightsalmon;

  .notification {
    min-width: 10rem;
    height: 3rem;
    border-radius: 0.5rem;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    color: lightsalmon;
    letter-spacing: 0.1rem;
    font-size: 1rem;
    font-weight: bold;
    user-select: none;
    cursor: pointer;
  }
`

export default ToastNotificationWrapper
