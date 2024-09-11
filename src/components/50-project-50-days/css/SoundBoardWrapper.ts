import styled from 'styled-components'

const SoundBoardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100vw;

  .card {
    flex: 1;
    height: 80px;
    margin: 30px;
    background-color: aqua;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bolder;
    cursor: pointer;
    user-select: none;
  }
`

export default SoundBoardWrapper