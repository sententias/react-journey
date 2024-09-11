import styled from 'styled-components'

const MovieAppWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  /* grid-template-rows: repeat(4,25%); */
  gap: 10px;
  width: 90%;
  background-color: gainsboro;
  align-self: flex-start;

  @keyframes rise {
    from {
      opacity: 0;
      height: 0%;
    }
    to {
      opacity: 1;
      height: 100%;
    }
  }

  .movie-container {
    background-color: papayawhip;
    height: 50vh;
    position: relative;
    overflow: hidden;
  }

  .interduce-container {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: cyan;
    height: 100%;
    animation: rise 1s ease-out;
  }
`

export default MovieAppWrapper