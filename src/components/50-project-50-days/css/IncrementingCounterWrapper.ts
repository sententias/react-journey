import styled from 'styled-components'

const IncrementingCounterWrapper = styled.div`
  display: flex;
  gap: 250px;

  .counter-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px
  }

  .iconfont {
    font-size: 100px;
  }

  .counter {
    font-size: 60px;
    font-weight: bold;
  }

  .description {
    font-size: smaller;
  }
`

export default IncrementingCounterWrapper
