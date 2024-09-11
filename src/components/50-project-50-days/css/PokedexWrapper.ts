import styled from 'styled-components';

const PokedexWrapper = styled.div`
  align-self: flex-start;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .pokemon-box {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    width: 80vw;
    gap: 2vw;
  }

  .pokemon {
    /* height: 15rem; */
    background-color: lightsalmon;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    padding: 0 1rem 1rem 1rem;
    box-sizing: border-box;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    & .image {
      width: 6rem;
      height: 6rem;
      position: relative;
      margin: 3vh 0;

      &::before {
        content: '';
        position: absolute;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        background-image: var(--bgc);
        inset: 0;
        background-color: rgba(255,255,255,0.5);
        border-radius: 50%;
      }
    }
    & .id {
      background-color: rgba(124, 124, 124, 0.5);
      padding: 0.1rem 0.3rem;
      border-radius: 0.8rem;
      font-size: 0.9rem;
      color: white;
    }
    & .name {
      color: black;
      font-size: 1rem;
    }
    & .type {
      font-size: 0.9rem;
      color: white;
    }
  }
`;

export default PokedexWrapper;
