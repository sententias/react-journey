import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navigation2FiftyWrapper from './css/Navigation2FiftyStyled.js';
import { usePageNames } from './usePageName.ts';
import { Menu, MenuProps } from 'antd';
import '@/assets/icon/iconfont.css';

export const Navigation2Fifty = () => {
  const pageNames = usePageNames();
  const location = useLocation();
  const [activePath, setActivePath] = useState<string>('');
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const [isChineseMode, setChineseMode] = useState(true);

  const toggleLanguageMode = () => {
    setChineseMode((prev) => !prev);
  };

  useEffect(() => {
    const currentPath = location.pathname;
    setActivePath(currentPath);

    const submenuKey = '50p50d';
    setOpenKeys(currentPath.includes(submenuKey) ? [submenuKey] : []);
  }, [location.pathname, pageNames]);

  const menuItems: MenuProps['items'] = [
    {
      key: '50p50d',
      type: 'submenu',
      label: isChineseMode ? '50项目50天' : '50project50days',
      children: pageNames.map((item) => ({
        key: item.path,
        label: (
          <Link
            className='menu-link'
            to={item.path}
          >
            {isChineseMode ? item.cName : item.name}
          </Link>
        )
      }))
    }
  ];

  return (
    <Navigation2FiftyWrapper>
      <div className='nav-header'>
        <img
          src='/logo192.png'
          alt='logo'
        />
        <div className='title'>目录</div>
        {isChineseMode ? (
          <i
            className='iconfont icon-zhongyingwenyingwen-01defuben'
            onClick={toggleLanguageMode}
          />
        ) : (
          <i
            className='iconfont icon-a-zhongyingwenzhongwen'
            onClick={toggleLanguageMode}
          />
        )}
      </div>
      <nav className='nav2f-content'>
        <Menu
          mode='inline'
          selectedKeys={[activePath]}
          openKeys={openKeys}
          onOpenChange={(keys) => setOpenKeys(keys)}
          items={menuItems}
        />
      </nav>
    </Navigation2FiftyWrapper>
  );
};

export default Navigation2Fifty;
