import React, { useState } from 'react'
import SplitLandingPageWrapper from './css/SplitLandingPageWrapper.ts'

export const SplitLandingPage = () => {
  const [isLeftActive, setIsLeftActive] = useState(false)
  const [isRightActive, setIsRightActive] = useState(false)

  const handleMouseEnterLeft = () => {
    setIsLeftActive(true)
  }

  const handleMouseLeaveLeft = () => {
    setIsLeftActive(false)
  }

  const handleMouseEnterRight = () => {
    setIsRightActive(true)
  }

  const handleMouseLeaveRight = () => {
    setIsRightActive(false)
  }

  return (
    <SplitLandingPageWrapper>
      <div 
        className={`left ${isLeftActive ? 'active' : ''}`}
        onMouseEnter={handleMouseEnterLeft}
        onMouseLeave={handleMouseLeaveLeft}
      >
        <div className='center'>
          <h1>左侧</h1>
          <button className='click-button'>Click Me</button>
        </div>
      </div>
      <div 
        className={`right ${isRightActive ? 'active' : ''}`}
        onMouseEnter={handleMouseEnterRight}
        onMouseLeave={handleMouseLeaveRight}
      >
        <div className='center'>
          <h1>右侧</h1>
          <button className='click-button'>Click Me</button>
        </div>
      </div>
    </SplitLandingPageWrapper>
  )
}

export default SplitLandingPage
