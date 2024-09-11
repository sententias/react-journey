import styled from 'styled-components'

const RandomChoicePickerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 30vw;
  gap:10px;
  textarea {
    height: 20vh;
    width: 30vw;
  }
  .ChoiceSet {
    display: flex;
    flex-wrap: wrap;
  }  
`

export default RandomChoicePickerWrapper