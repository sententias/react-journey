import React, { useState } from 'react';
import NotesAppWrapper from './css/NotesAppWrapper.ts';
import styled from 'styled-components';

export const NotesApp = () => {
  const [notes, setNotes] = useState<number[]>([]);

  const createNote = () => {
    setNotes((prev) => [...prev, prev.length]);
  };

  const removeNote = (id: number) => {
    setNotes((prev) => prev.filter((i) => i !== id));
  };

  return (
    <NotesAppWrapper>
      <div
        className='create'
        onClick={createNote}
      >
        新建笔记
        <i className='iconfont icon-mti-jia' />
      </div>
      <div className='notes-box'>
        {notes.map((id) => (
          <Note
            key={id}
            removeNote={() => removeNote(id)}
          />
        ))}
      </div>
    </NotesAppWrapper>
  );
};

interface NoteProps {
  removeNote: Function;
}

const Note: React.FC<NoteProps> = (props) => {
  const { removeNote } = props;
  const [isEditable, setIsEditable] = useState(false);

  const handleEditClick = () => {
    setIsEditable((prevState) => !prevState);
  };

  return (
    <NoteWrapper>
      <div className='note'>
        <div className='header'>
          <i
            className={`iconfont header-icon icon-a-014_bianji ${
              isEditable ? 'disable' : ''
            }`}
            onClick={handleEditClick}
          />
          <i
            className='iconfont header-icon icon-a-014_lajitong'
            onClick={() => removeNote()}
          />
        </div>
        <textarea
          className='container'
          disabled={isEditable}
        ></textarea>
      </div>
    </NoteWrapper>
  );
};

const NoteWrapper = styled.div`
  .note {
    min-height: 50vh;
    min-width: 20vw;
    background-color: #fff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .header {
    background-color: yellowgreen;
    min-height: 2rem;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0.5rem;
    padding-right: 0.2rem;
    box-sizing: border-box;

    & .header-icon {
      color: white;
      font-size: 1.5rem;
      cursor: pointer;
      user-select: none;
      &.disable {
        color: gray;
      }
      &:hover {
        color: lightcoral;
      }
    }
  }

  .container {
    flex: 1;
    width: 100%;
    box-sizing: border-box;
    font-size: 1rem;
    padding: 0.5rem 1rem 0 1rem;
    resize: none;
    border: none;
    overflow: scroll;

    &:focus {
      outline: none;
    }

    &:disabled {
      font-size: 0.8rem;
      color: black;
    }
  }
`;

export default NotesApp;
