import React, { useEffect, useState } from 'react'
import AutoTextEffectWrapper from './css/AutoTextEffectWrapper.ts'

export const AutoTextEffect = () => {
  const text = 'Hello World!'
  const [activeIndex, setActiveIndex] = useState(0)
  const [speed, setSpeed] = useState(1) 

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % text.length)
      // 速度控制：1秒除以速度值，防止speed为0
    }, 1000 / (speed | 1)) 

    return () => clearInterval(intervalId)
    // 当速度发生变化时，重新创建定时器
  }, [speed]) 

  // 处理速度控制器的变化
  const SpeedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpeed(Number(event.target.value))
  }

  return (
    <AutoTextEffectWrapper>
      {text.substring(0, activeIndex + 1)}
      <div className='controller'>
        <label htmlFor='speed'>Speed:</label>
        <input
          type='number'
          name='speed'
          id='speed'
          value={speed}
          min='1'
          max='10'
          step='1'
          onChange={(event) => SpeedChange(event)}
        />
      </div>
    </AutoTextEffectWrapper>
  )
}

export default AutoTextEffect
