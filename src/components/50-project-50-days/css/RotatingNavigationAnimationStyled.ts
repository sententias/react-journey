import styled from 'styled-components'

interface RotatingNavigationAnimationWrapperrProps {
  active: string
}

const RotatingNavigationAnimationWrapper = styled.div.attrs<RotatingNavigationAnimationWrapperrProps>(
  (props) => ({
    className: props.active === 'true' ? 'active' : ''
  })
)`
  align-self: flex-start;
  height: 150vh;
  width: 80vw;
  background-color: greenyellow;
  /* transform: rotate(20deg); */
  transform-origin: 0 0;
  transition: transform 0.5s linear; 

  &.active {
    transform: rotate(-20deg); 
    transform-origin: 0 0;
    transition: transform 0.5s linear; 
  }

  .menu {
    width: 150px;
    height: 150px;
    background-color: #fff;
    box-sizing: border-box;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-50%) translateX(-50%);
  }

  .symbol {
    cursor: pointer;
    user-select: none;
    transform: translateY(100%) translateX(150%);
  }

  /* .symbol.active {
    transform: rotate(-70deg); 
    transform-origin: 50% 50%;
    transition: transform 0.5s linear; 
  } */

  p {
    padding: 0 30px;
  }
`

export default RotatingNavigationAnimationWrapper
