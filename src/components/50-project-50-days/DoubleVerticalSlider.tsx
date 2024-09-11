import React, { useState } from 'react'
import DoubleVerticalSliderWrapper from './css/DoubleVerticalSliderWrapper.ts'
import '../../assets/icon/iconfont.css'

export const DoubleVerticalSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const imgURL = [
    'assets/images/picture01.png',
    'assets/images/picture02.jpg',
    'assets/images/picture03.jpg',
    'assets/images/picture04.jpg'
  ]

  const nextImg = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imgURL.length)
  }

  const prevImg = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + imgURL.length) % imgURL.length
    )
  }

  return (
    <DoubleVerticalSliderWrapper>
      <div className='left-content'>
        <div className='left-background'>{currentIndex}</div>
        <i
          className='iconfont icon-mti-jiantouxia1'
          onClick={nextImg}
        ></i>
      </div>
      <div className='right-content'>
        <div className='right-background-box'>
          {imgURL.map((url, index) => (
            <div
              key={index}
              className='right-background'
              style={{
                backgroundImage: `url(${url})`,
                transform: `translateY(-${currentIndex * 100}%)`
              }}
            ></div>
          ))}
        </div>
        <i
          className='iconfont icon-mti-jiantoushang'
          onClick={prevImg}
        ></i>
      </div>
    </DoubleVerticalSliderWrapper>
  )
}

export default DoubleVerticalSlider
