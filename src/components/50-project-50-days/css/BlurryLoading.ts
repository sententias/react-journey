import styled from 'styled-components'

interface BlurryLoadingWrapperProps {
  $progress: number
}

const BlurryLoadingWrapper = styled.div<BlurryLoadingWrapperProps>`
  align-self: flex-start;

  .img-blur {
    filter: blur(${(props) => 20 - (props.$progress / 5)}px);
    height: 150vh;
    width: auto;
  }

  .img-box {
    position: relative;
  }

  .img-box::before {
    content: '${(props) => props.$progress}%';
    font-size: 60px; 
    position: absolute;
    opacity: ${(props) => 100 - props.$progress}%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
    color: black;
    display: block;
    z-index: 2;
  }
`

export default BlurryLoadingWrapper
