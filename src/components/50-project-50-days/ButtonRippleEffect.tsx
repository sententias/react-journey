import React, { Fragment, useRef, useState } from 'react'
import ButtonRippleEffectWrapper from './css/ButtonRippleEffectWrapper.ts'

interface CSSProperties {
  [key: `--${string}`]: string | number
}

const clr = 'red'

export const ButtonRippleEffect = () => {
  const duration = 3000

  const [circleWaitQuery, setCircleWaitQuery] = useState<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8, 9
  ])
  const [circleActiveQuery, setCircleActiveQuery] = useState<number[]>([])
  const [mousePosition, setMousePosition] = useState<{
    x: number
    y: number
  } | null>(null)
  const [showRadiate, setShowRadiate] = useState(false)

  const aPositionRef = useRef<HTMLAnchorElement>(null)

  const handleMouseMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (aPositionRef.current) {
      const { clientX, clientY } = event
      const rect = aPositionRef.current.getBoundingClientRect()
      const x = clientX - rect.left
      const y = clientY - rect.top

      setMousePosition({ x, y })
    }
  }

  // 类似线程池
  const RippleEffect = () => {
    const newCircle = circleWaitQuery[0]
    if (newCircle !== undefined) {
      setCircleWaitQuery((prev) => prev.slice(1))

      setCircleActiveQuery((prev) => [...prev, newCircle])

      setTimeout(() => {
        setCircleActiveQuery((prev) => {
          const updatedActive = prev.slice(1)
          setCircleWaitQuery((prevWait) => [...prevWait, newCircle])
          return updatedActive
        })
      }, duration)
    }
  }

  return (
    <ButtonRippleEffectWrapper $mousePosition={mousePosition || { x: 0, y: 0 }}>
      <a
        href='#0'
        onMouseMove={handleMouseMove}
        onClick={RippleEffect}
        onMouseEnter={() => setShowRadiate(true)}
        onMouseLeave={() => setShowRadiate(false)}
        ref={aPositionRef}
        style={{
          '--clr' : `${clr}`,
        } as CSSProperties}
      >
        <div
          className='radiate'
          style={{
            opacity: showRadiate ? 1 : 0, 
            top: `${mousePosition?.y ?? 0}px`,
            left: `${mousePosition?.x ?? 0}px`,
            '--clr' : `${clr}`,
          } as CSSProperties}
        >
          <div></div>
          {circleActiveQuery.map((item) => (
            <Fragment key={item}>
              <div
                className='circle'
                style={{ '--time': `${duration / 3}ms` } as CSSProperties}
              />
              <div
                className='circle'
                style={{ '--time': `${(duration / 3) + 500}ms` } as CSSProperties}
              />
              <div
                className='circle'
                style={{ '--time': `${(duration / 3) + 1000}ms` } as CSSProperties}
              />
            </Fragment>
          ))}
        </div>
        <span>CLICK ME</span>
      </a>
    </ButtonRippleEffectWrapper>
  )
}

export default ButtonRippleEffect
