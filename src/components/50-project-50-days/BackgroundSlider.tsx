import React, { useState } from 'react'
import BackgroundSliderWrapper from './css/BackgroundSliderWrapper.ts'
import '../../assets/icon/iconfont.css'

export const BackgroundSlider = () => {
  const [imageUrlArray] = useState([
    'assets/images/picture10.png',
    'assets/images/picture11.png',
    'assets/images/picture13.jpg'
  ])
  const [imageActiveIndex, setImageActiveIndex] = useState(0)

  const prevImage = () =>
    setImageActiveIndex(
      (prev) => (prev + imageUrlArray.length - 1) % imageUrlArray.length
    )

  const nextImage = () =>
    setImageActiveIndex((prev) => (prev + 1) % imageUrlArray.length)

  return (
    <BackgroundSliderWrapper
      key={imageActiveIndex}
      url={imageUrlArray[imageActiveIndex]}
    >
      <div className='slider-container'>
        <i
          className='prev iconfont icon-mti-jiantouzuo'
          onClick={() => prevImage()}
        />
        <i
          className='next iconfont icon-mti-jiantouyou'
          onClick={() => nextImage()}
        />
      </div>
    </BackgroundSliderWrapper>
  )
}

export default BackgroundSlider
