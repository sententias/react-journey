import React, { useRef, useState } from 'react'
import DoubleClickHeartWrapper from './css/DoubleClickHeartWrapper.ts'
import '../../assets/icon/iconfont.css'

interface Pointer {
  x: number
  y: number
}

const DOUBLE_CLICK_DURATION = 1000
const HEART_APPEAR_DURATION = 1000

export const DoubleClickHeart = () => {
  const [pointer, setPointer] = useState<Pointer | null>(null)
  const [lastClickTime, setLastClickTime] = useState<Date>(new Date())
  const [heartActive, setHeartActive] = useState(false)
  const picRef = useRef<HTMLDivElement>(null)

  const ClickHeart = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = event
    const { offsetLeft = 0, offsetTop = 0 } = picRef.current as HTMLDivElement
    const now = new Date()
    const timeDuration = now.getTime() - lastClickTime.getTime()
    console.log(timeDuration)

    setPointer({ x: clientX - offsetLeft, y: clientY - offsetTop })

    if (timeDuration <= DOUBLE_CLICK_DURATION) {
      setLastClickTime(now)
      setHeartActive(true)
      setTimeout(() => setHeartActive(false), HEART_APPEAR_DURATION)
    }
    setLastClickTime(now)
  }

  return (
    <DoubleClickHeartWrapper>
      <h2>双击喜欢</h2>
      <div
        className='pic'
        style={{ backgroundImage: `url(assets/images/picture05.png)` }}
        onMouseDown={ClickHeart}
        ref={picRef}
      >
        {heartActive && (
          <i
            className='iconfont icon-xin'
            style={{
              left: pointer?.x,
              top: pointer?.y
            }}
          />
        )}
      </div>
    </DoubleClickHeartWrapper>
  )
}

export default DoubleClickHeart
