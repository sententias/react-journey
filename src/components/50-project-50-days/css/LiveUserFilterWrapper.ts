import styled from 'styled-components';

const LiveUserFilterWrapper = styled.div`
  user-select: none;

  .box {
    width: 15rem;
    max-height: 25rem;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .header {
    width: 100%;
    height: 4rem;
    background-color: lightskyblue;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.5rem 0;

    .title {
      color: black;
    }
  }

  .header input {
    border: none;
    border-radius: 5px;
    padding: 0.2rem 0.5rem;
    &:focus {
      border: none;
      outline: none;
    }
  }

  .user-list {
    flex: 1;
    width: 100%;
    overflow-y: auto; /* Add scrolling if necessary */
    padding: 0;
    margin: 0;

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      background-color: #fff;

      li {
        display: flex;
        flex-direction: column;
        padding: 0.5rem;
        border-bottom: 1px solid #aaa;
        cursor: pointer;

        &:hover {
          background-color: lightskyblue;
        }

        .username {
          font-weight: bold;
          color: black;
          margin: 0.2rem;
        }

        .signature {
          font-size: 0.7rem;
          color: #888;
        }
      }
    }
  }
`;

export default LiveUserFilterWrapper;
