import styled from 'styled-components';

const TodoListWrapper = styled.div`
  user-select: none;
  .box {
    height: fit-content;
    max-width: 30vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2), 0 6px 20px rgba(0, 0, 0, 0.19);
    border-radius: 5px;
    background-color: lavender;
    box-sizing: border-box;

    input {
      width: 100%;
      border-top: 1px solid rgba(127, 0, 210, 0.3);
      border-bottom: 1px solid rgba(127, 0, 210, 0.3);
      border-left: none;
      border-right: none;
      padding: 0.5rem;
      box-sizing: border-box;
      font-size: 1rem;
      &:focus {
        outline: none;
        box-shadow: 0 4px 8px rgba(127, 0, 210, 0.2),
          0 6px 20px rgba(127, 0, 210, 0.19);
      }
      &::placeholder{
        color: #999;
        font-size: .8rem;
      }
    }

    ul {
      width: 100%;
      padding: 0;
      margin: 0;
      margin-top: .5rem;
      list-style: none;
      color: black;

      li {
        border-bottom: 1px solid #ddd;
        padding: 0.5rem;
        background-color: #fff;
        transition: background-color 0.3s ease;
        cursor: pointer;

        &:hover {
          background-color: #f0f0f0;
        }

        &.done {
          text-decoration: line-through;
          color: #888;
        }
      }
    }
  }
`;

export default TodoListWrapper;
