// TODO 优化动画表现
import React, { useState } from 'react'
import AnimatedNavigationWrapper from './css/AnimatedNavigationWrapper.ts'

export const AnimatedNavigation = () => {
  const [menuActive,setMenuActive] = useState<boolean>(false)

  const paddingNav = () => {
    setMenuActive((prev) => (!prev))
  }

  return (
    <AnimatedNavigationWrapper>
      <div className='top'></div>
      <div className={`nav ${menuActive ? 'active' : ''}`}>
        <span className={`tab ${menuActive ? 'active' : ''}`}>首页</span>
        <span className={`tab ${menuActive ? 'active' : ''}`}>空间</span>
        <span className={`tab ${menuActive ? 'active' : ''}`}>关于</span>
        <i className='iconfont icon-caidan' onClick={paddingNav}/>
      </div>
      <div className='bottom'></div>
    </AnimatedNavigationWrapper>
  )
}

export default AnimatedNavigation
