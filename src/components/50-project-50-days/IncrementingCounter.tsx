import React, { useEffect, useState } from 'react'
import IncrementingCounterWrapper from './css/IncrementingCounterWrapper.ts'

export const IncrementingCounter = () => {
  const [googleUser,setGoogleUser] = useState(0)
  const [bingleUser,setBingleUser] = useState(0)
  const [githubleUser,setGithubleUser] = useState(0)

  const targetGoogleUser = 15000
  const targetBingleUser = 10000
  const targetGithubleUser = 5000

  useEffect(() => {
    const incrementStep = 20;
    const duration = 2000

    const interval = setInterval(() => {
      setGoogleUser(prev => {
        const newValue = Math.min(prev + incrementStep, targetGoogleUser)
        return newValue
      })

      setBingleUser(prev => {
        const newValue = Math.min(prev + incrementStep, targetBingleUser)
        return newValue
      })

      setGithubleUser(prev => {
        const newValue = Math.min(prev + incrementStep, targetGithubleUser)
        return newValue
      })
    }, duration / (targetGoogleUser / incrementStep))

    return () => clearInterval(interval);
  }, [])

  return (
    <IncrementingCounterWrapper>
      <div className='counter-container'>
        <i className='iconfont icon-google' />
        <div className='counter'>{googleUser}</div>
        <div className='description'>Google user</div>
      </div>
      <div className='counter-container'>
        <i className='iconfont icon-bing' />
        <div className='counter'>{bingleUser}</div>
        <div className='description'>bing user</div>
      </div>
      <div className='counter-container'>
        <i className='iconfont icon-github' />
        <div className='counter'>{githubleUser}</div>
        <div className='description'>github user</div>
      </div>
    </IncrementingCounterWrapper>
  )
}

export default IncrementingCounter
