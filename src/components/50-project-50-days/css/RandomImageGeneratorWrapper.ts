import styled from 'styled-components';

const RandomImageGeneratorWrapper = styled.div`
  align-self: flex-start;
  height: fit-content;
  width: 100%;
  background-color: #fff;
  display: grid;
  grid-template-columns: repeat(5,1fr);
  padding: 4rem;
  gap: 2rem;
  .box{
    height: 30vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export default RandomImageGeneratorWrapper;
