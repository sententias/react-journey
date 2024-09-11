import styled from 'styled-components'

const ImageCarouselWrapper = styled.div`
  .show {
    width: 30vw;
    height: 70vh;
    position: relative;
    background-color: #fff;
    overflow: hidden;
  }

  .carousel-image {
    position: absolute;
    inset: 0;
    background-position: center;
    background-size: cover;
    transition: transform 1s ease-out;
  }

  .controller {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .button {
    flex:1;
    border: 1px solid rgb(183, 114, 87);
    background-color: lightsalmon;
    color: white;
    cursor: pointer;
  }
`

export default ImageCarouselWrapper