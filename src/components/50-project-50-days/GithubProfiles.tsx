import React, { useEffect, useRef, useState } from 'react'
import GithubProfilesWrapper from './css/GithubProfilesWrapper.ts'
import axios from 'axios'

interface userDataTypes {
  name: string
  followers: number
  following: number
  public_repos: number
  updated_at: string
  avatarURL: string
}

export const GithubProfiles = () => {
  const [userData, setUserData] = useState<userDataTypes | null>(null)

  const inputRef = useRef<HTMLInputElement>(null)

  const searchUser = (enterKey: React.KeyboardEvent<HTMLInputElement>) => {
    const name = inputRef.current?.value
    if (name && enterKey.key === 'Enter') {
      axios({
        url: `https://api.github.com/users/${name}`,
        method: 'GET'
      }).then(
        (res) => {
          console.log(res.data)
          setUserData({
            name: res.data.login,
            followers: res.data.followers,
            following: res.data.following,
            public_repos: res.data.public_repos,
            updated_at: res.data.updated_at,
            avatarURL: res.data.avatar_url
          })
        },
        (error) => {
          console.error('Error fetching user data:', error)
          setUserData(null)
        }
      )
    }
  }

  return (
    <GithubProfilesWrapper>
      <input
        type='text'
        placeholder='请输入github用户名...'
        ref={inputRef}
        onKeyDown={(enterKey) => searchUser(enterKey)}
      />
      {userData && (
        <div className='user-profile'>
          <div className='avatar-name'>
            <div
              className='avatar'
              style={{ backgroundImage: `url(${userData.avatarURL})` }}
            />
            <h2>{userData.name}</h2>
          </div>
          <p>粉丝数: {userData.followers}</p>
          <p>关注数: {userData.following}</p>
          <p>公开仓库数: {userData.public_repos}</p>
          <p>最后上传时间: {new Date(userData.updated_at).toLocaleString()}</p>
        </div>
      )}
    </GithubProfilesWrapper>
  )
}

export default GithubProfiles
