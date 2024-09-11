import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navigation2FiftyWrapper from './css/Navigation2FiftyStyled.js';
import { usePageNames } from './usePageName.ts';

export const Navigation2Fifty = () => {
  const pageNames = usePageNames()
  const location = useLocation()
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  useEffect(() => {
    const currentPath = location.pathname
    const index = pageNames.findIndex(item => item.path === currentPath)
    setActiveIndex(index)
  }, [location.pathname, pageNames])

  return (
    <Navigation2FiftyWrapper>
      <div className='nav2f'>
        <div className='nav-header'>
          <img src='logo192.png' alt='logo'/>
          <h2>目录</h2>
        </div>
        <nav className='nav2f-nav'>
          <ul>
            {pageNames.map((item, index) => (
              <li key={index}>
                <Link
                  className={activeIndex === index ? 'isActive' : ''}
                  to={item.path}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </Navigation2FiftyWrapper>
  )
}

export default Navigation2Fifty
