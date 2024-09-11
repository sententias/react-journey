import styled from 'styled-components'

const PasswordGeneratorWrapper = styled.div`
  user-select: none;
  color: black;

  h2 {
    letter-spacing: 0.1rem;
    margin: 0;
    margin-top: 1rem;
  }

  .box {
    height: 20rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    background-color: lightsalmon;
    padding: 0 2rem;
    padding-bottom: 2rem;
    gap: 0.5rem;
    border-radius: 0.2rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  .copy {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  .icon-mti-fuzhi {
    cursor: pointer;
    font-size: 1.5rem;
  }

  .target {
    height: 2rem;
    padding: 0.8rem 0.5rem;
    box-sizing: border-box;
    border: none;
    border-radius: 0.2rem;
    width: 100%;
    display: inline;

    &:focus {
      border: none;
      outline: none;
      box-shadow: 0 4px 8px 0 rgba(220, 110, 110, 0.5),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
  }

  .settings {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
  }

  .setting {
    width: 16rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .generate {
    width: 100%;
    height: 2rem;
    border: 0;
    border-radius: 0.2rem;
    background-color: #ab6a50;
    cursor: pointer;
    color: white;
  }
`

export default PasswordGeneratorWrapper
