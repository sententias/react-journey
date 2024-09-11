import styled from 'styled-components';

const NotesAppWrapper = styled.div`
  align-self: flex-start;
  /* 用于实现类似justify-self的操作 */
  margin-right: auto;
  width: 100%;
  .create {
    position: fixed;
    right: 2vw;
    top: 4vh;
    min-width: 9vw;
    min-height: 5vh;
    background-color: yellowgreen;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    letter-spacing: 0.1rem;
    gap: 0.5rem;
    padding: 0 0.3rem;
    cursor: pointer;
    user-select: none;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    &:hover {
      color: lightcoral;
    }
  }

  .notes-box {
    margin-left: 3vw;
    margin-right: 3vw;
    margin-top: 15vh;
    min-height: fit-content;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3vw;
  }
`;

export default NotesAppWrapper;
