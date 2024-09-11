import styled from 'styled-components'

const GithubProfilesWrapper = styled.div`
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  input {
    width: 12rem;
    height: 1.3rem;
    padding: 0.8rem 0.5rem;
    box-sizing: border-box;
    border: none;
    border-radius: 0.2rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    &:focus {
      border: none;
      outline: none;
      box-shadow: 0 4px 8px 0 rgba(53, 0, 220, 0.5),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    &::placeholder {
      color: rgb(220, 220, 220);
      font-size: 0.8rem;
    }
  }

  h2 {
    color: lightcoral;
  }

  .user-profile {
    background-color: #fff;
    border-radius: 0.2rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    padding: 0 0.7rem;
  }

  .user-profile .avatar-name {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 4rem;
    padding: 1rem 0 0 0;
  }

  .user-profile .avatar-name .avatar {
    border-radius: 50%;
    height: 4rem;
    width: 4rem;
    background-position: center;
    background-size: cover;
    border: 3px solid #2a2a72;
  }
`

export default GithubProfilesWrapper
