import React, { useState, useEffect } from 'react'
import ThemeClockWrapper from './css/ThemeClockWrapper.ts'

interface CSSProperties {
  [key: `--${string}`]: string | number
}

export const ThemeClock = () => {
  const [currentTime, setCurrentTime] = useState<string>('')
  const [currentDate, setCurrentDate] = useState<string>('')
  const [currentHourAngle, setCurrentHourAngle] = useState<string>('0deg')
  const [currentMinuteAngle, setCurrentMinuteAngle] = useState<string>('0deg')
  const [currentSecondAngle, setCurrentSecondAngle] = useState<string>('0deg')

  useEffect(() => {
    const updateClock = () => {
      const now = new Date()

      const timeFormatter = new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      })
      setCurrentTime(timeFormatter.format(now))

      const dateFormatter = new Intl.DateTimeFormat('en-US', {
        weekday: 'long',
        month: 'short',
        day: 'numeric'
      })
      setCurrentDate(dateFormatter.format(now))

      const seconds = now.getSeconds()
      const minutes = now.getMinutes()
      const hours = now.getHours()

      const secondAngle = (seconds / 60) * 360
      const minuteAngle = (minutes / 60) * 360
      const hourAngle = ((hours % 12) / 12) * 360 + (minutes / 60) * 30

      setCurrentSecondAngle(`${secondAngle}deg`)
      setCurrentMinuteAngle(`${minuteAngle}deg`)
      setCurrentHourAngle(`${hourAngle}deg`)
    }

    updateClock()
    const intervalId = setInterval(updateClock, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <ThemeClockWrapper>
      <button className='toggle'>
        <i className='iconfont icon-taiyang' />
      </button>
      <div className='clock'>
        <div className='needle hour' style={{ transform: `translate(-50%,-100%) rotate(${currentHourAngle})` }} />
        <div className='needle minute' style={{ transform: `translate(-50%,-100%) rotate(${currentMinuteAngle})` }} />
        <div
          className='needle second'
          style={{ transform: `translate(-50%,-100%) rotate(${currentSecondAngle})`, '--clr': '#f00' } as CSSProperties}
        />
        <div className='center' />
      </div>
      <div className='date-time-container'>
        <div className='time'>{currentTime}</div>
        <div className='date'>{currentDate}</div>
      </div>
    </ThemeClockWrapper>
  )
}

export default ThemeClock
