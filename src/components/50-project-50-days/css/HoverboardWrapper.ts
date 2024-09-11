import styled from 'styled-components';

const HoverboardWrapper = styled.div<{ '$square-length': number }>`
  /* background-color: #fff; */
  display: grid;
  grid-template-columns: repeat(${props => props['$square-length']}, 1fr);
  grid-template-rows: repeat(${props => props['$square-length']}, 1fr);
`;

export default HoverboardWrapper;
