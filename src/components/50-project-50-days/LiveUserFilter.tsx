import React, { useRef, useState } from 'react';
import LiveUserFilterWrapper from './css/LiveUserFilterWrapper.ts';

const Users = [
  { username: 'Alex_01', signature: '"Exploring the cosmos!"' },
  { username: 'Jessie88', signature: '"Coffee and coding!"' },
  { username: 'Mark_Smith', signature: '"Life is a journey."' },
  { username: 'Emily_J', signature: '"Adventures await."' },
  { username: 'Nina_L', signature: '"Dream big, work hard."' },
  { username: 'Chris_T', signature: '"Always learning, always growing."' },
  { username: 'Liam_B', signature: '"Embrace the challenge."' },
  {
    username: 'Sophia_W',
    signature: '"Creativity is intelligence having fun."'
  },
  {
    username: 'Jordan_C',
    signature: '"The best time for new beginnings is now."'
  },
  {
    username: 'Ava_K',
    signature: '"Believe in yourself and all that you are."'
  }
];

export const LiveUserFilter = () => {
  const [filteredUsers, setFilteredUsers] = useState(Users);
  const inputRef = useRef<HTMLInputElement>(null);

  const FilterUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const filtered = Users.filter((user) =>
      user.username.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  return (
    <LiveUserFilterWrapper>
      <div className='box'>
        <div className='header'>
          <div className='title'>在线用户过滤</div>
          <input
            type='text'
            ref={inputRef}
            onChange={(e) => FilterUser(e)}
          />
        </div>
        {filteredUsers && (
          <div className='user-list'>
            <ul>
              {filteredUsers.map((user, index) => (
                <li
                  key={index}
                  className='user'
                >
                  <div className='username'>{user.username}</div>
                  <div className='signature'>{user.signature}</div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </LiveUserFilterWrapper>
  );
};

export default LiveUserFilter;
