import styled from 'styled-components'

const DrawingAppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  canvas {
    width: 70vw;
    height: 75vh;
    border: 2px solid black;
    background-color: #fff;
  }

  .tool-bar {
    margin-top: 0.5rem;
  }
`

export default DrawingAppWrapper
