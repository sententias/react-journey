import React, { useState } from 'react';
import NetflixMobileNavigationWrapper from './css/NetflixMobileNavigationWrapper.ts';

export const NetflixMobileNavigation = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <NetflixMobileNavigationWrapper>
      <div className='logo'></div>
      <i className='iconfont icon-caidan' onClick={toggleMenu} />
      <div className={`nav animation-black ${isActive ? 'active' : ''}`}></div>
      <div className={`nav animation-red ${isActive ? 'active' : ''}`}></div>
      <div className={`nav animation-content ${isActive ? 'active' : ''}`}>
        <i className='iconfont icon-mti-guanbi' onClick={toggleMenu} />
        <div className='logo'></div>
        <div className='item'>选项1</div>
        <div className='item'>选项2</div>
        <div className='item'>选项3</div>
        <div className='item'>选项4</div>
        <div className='item2'>选项5</div>
        <div className='item2'>选项6</div>
      </div>
    </NetflixMobileNavigationWrapper>
  );
};

export default NetflixMobileNavigation;
