import styled from 'styled-components'

const DadJokesWrapper = styled.div`
  width: 50vw;
  min-height: 30vh;
  height: max-content;
  background-color: skyblue;
  border-radius: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 30px;

  section {
    flex: 1;
    display: flex;
    align-items: center;
    padding: 30px;
  }
  
  button {
    border: 0px solid skyblue;
    margin: 20px;
    border-radius: 5px;
  }
`

export default DadJokesWrapper