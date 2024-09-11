// TODO 优化设计表现
import React, { useState } from 'react'
import DrinkWaterWrapper from './css/DrinkWaterWrapper.ts'

export const DrinkWater = () => {
  const cups = { length: 8 }
  const [precent, setPrecent] = useState(-1)

  const handleClick = (index: number) => {
    return setPrecent(index)
  }

  return (
    <DrinkWaterWrapper precent={precent}>
      <div className='total-water'>
        <div className='content-water'>
          <div className='drinked-water'></div>
        </div>
      </div>
      <div className='cups'>
        {Array.from(cups, (_, i) => i).map((index) => (
          <div className='total-water smaller'>
            {/* 会冒泡到父元素 */}
            <div
              className='content-water smaller'
              onClick={() => handleClick(index)}
            >
              <div
                className={`drinked-water smaller ${
                  index <= precent ? 'active' : ''
                }`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </DrinkWaterWrapper>
  )
}

export default DrinkWater
