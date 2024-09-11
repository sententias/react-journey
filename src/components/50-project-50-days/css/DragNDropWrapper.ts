import styled from 'styled-components'

const DragNDropWrapper = styled.div<{$box_number: number}>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.$box_number}, 1fr);
  gap: 3rem;

  [class^='container'] {
    width: 8vw;
    height: 12vh;
    position: relative;
  }

  .img {
    position: absolute;
    inset: 0;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

`

export default DragNDropWrapper
