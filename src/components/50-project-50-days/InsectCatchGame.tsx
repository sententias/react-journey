import React, { Fragment, useState } from 'react';
import InsectCatchGameWrapper from './css/InsectCatchGameWrapper';

// 获取随机位置
const getRandomPosition = (width: number, height: number) => {
  // 防止图标出界
  const x = Math.random() * (width - 300);
  const y = Math.random() * (height - 100);
  return { x, y };
};

// 初始图标位置
const initialPositions = {
  'icon-github': { x: 1000, y: 100 },
  'icon-bing': { x: 1000, y: 100 },
  'icon-google': { x: 1000, y: 100 }
};

export const InsectCatchGame = () => {
  const [visibleIcon, setVisibleIcon] = useState<string | null>(null);
  const [iconPosition, setIconPosition] = useState<{
    [key: string]: { x: number; y: number };
  }>(initialPositions);

  const handleClick = (icon: string) => {
    const { innerWidth: width, innerHeight: height } = window;
    const position = getRandomPosition(width, height);
    setIconPosition((prev) => ({ ...prev, [icon]: position }));
    setVisibleIcon(icon);
  };

  const chooseIcon = (IconName:string) => {
    setVisibleIcon(IconName)
  }

  return (
    <InsectCatchGameWrapper>
      {/* 如果没有点击过，就提供三个图标以供点击 */}
      {!Boolean(visibleIcon) ? (
        <Fragment>
          <i
            className='iconfont icon-github'
            onClick={() => chooseIcon('icon-github')}
            style={{
              position: 'absolute',
              left: '500px',
              top: '300px'
            }}
          ></i>
          <i
            className='iconfont icon-bing'
            onClick={() => chooseIcon('icon-bing')}
            style={{
              position: 'absolute',
              left: '600px',
              top: '300px'
            }}
          ></i>
          <i
            className='iconfont icon-google'
            onClick={() => chooseIcon('icon-google')}
            style={{
              position: 'absolute',
              left: '690px',
              top: '300px'
            }}
          ></i>
        </Fragment>
      ) : (
        ['icon-github', 'icon-bing', 'icon-google'].map((icon) => (
          <i
            key={icon}
            className={`iconfont ${icon}`}
            onClick={() => handleClick(icon)}
            style={{
              display: icon === visibleIcon ? 'block' : 'none',
              position: 'absolute',
              left: iconPosition[icon]?.x,
              top: iconPosition[icon]?.y
            }}
          />
        ))
      )}
    </InsectCatchGameWrapper>
  );
};

export default InsectCatchGame;
