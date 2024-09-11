import React, { useState } from 'react';
import MobileTabNavigationWrapper from './css/MobileTabNavigationWrapper.ts';

export const MobileTabNavigation = () => {
  const imgURL = [
    'assets/images/picture01.png',
    'assets/images/picture02.jpg',
    'assets/images/picture03.jpg',
    'assets/images/picture04.jpg'
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const handleTabClick = (index) => {
    setActiveIndex(index);
  };

  const tabs = [
    { icon: 'icon-a-014_wodezhuye', description: '我的主页' },
    { icon: 'icon-a-014_liaotianduihua-38', description: '我的对话' },
    { icon: 'icon-a-014_wodetuandui', description: '我的团队' },
    { icon: 'icon-a-014_xiaoxitongzhi', description: '我的消息' }
  ];


  return (
    <MobileTabNavigationWrapper>
      <div className='mobile'>
        <div className='image-box'>
          {imgURL.map((url, index) => (
            <div
              className='image'
              style={{
                backgroundImage: `url(${url})`,
                transform: `translateX(${(index - activeIndex) * 25}vw)`
              }}
            ></div>
          ))}
        </div>
        <div className='navigation'>
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`tab ${activeIndex === index ? 'active' : ''}`}
              onClick={() => handleTabClick(index)}
            >
              <i className={`iconfont ${tab.icon}`} />
              <div className='description'>{tab.description}</div>
            </div>
          ))}
        </div>
      </div>
    </MobileTabNavigationWrapper>
  );
};

export default MobileTabNavigation;
