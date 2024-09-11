import styled from 'styled-components'

const StickyNavigationWrapper = styled.div<{$isScrolled: boolean}>`
  align-self: flex-start;
  position: relative;
  width: 100%;

  h1 {
    color: black;
  }

  .nav {
    position: sticky;
    height: 3rem;
    top: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    background-image: url('assets/images/picture11.png');
    /* background-size: cover; */
    background-size: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    box-sizing: border-box;
    z-index: 1;
    color: white;
    transition: color 300ms ease-out,background-color 300ms ease-out;
    &.over {
      background-image: none;
      background-color: white;
      color: black;
    }
    /* 这样写都行，也太强大了吧 */
    /* 但是仔细想一下，这和在外面写.nav::before是一样的 */
    ${(props) => (!props.$isScrolled && `&::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5); 
      pointer-events: none; 
    }`)}
  }

  .hero {
    height: 100vh;
    background-image: url('assets/images/picture11.png');
    background-position: 0 -3rem;
    /* background-size: cover; */
    background-size: 100vw;
    /* transform: translateY(-3rem); */
  }

  .nav .navtext {
    user-select: none;
    cursor: pointer;
    z-index: 2;
    &.active {
      color: lightcoral;
    }
    &:hover {
      color: lightcoral;
    }
  }

  .nav .web-title {
    font-size:1.5rem;
    font-weight:bold;
  }

  .nav .blocker {
    flex: 1;
  }

  .nav .web-pages {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  .main-content {
    padding:0 1rem;
    box-sizing:border-box;
  }
`

export default StickyNavigationWrapper
