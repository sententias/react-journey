import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation2FiftyWrapper from './css/Navigation2FiftyStyled.js';
import { usePageNames } from './usePageName.ts';

export const Navigation2Fifty = () => {
  const pageNames = usePageNames()
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const handleClick = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <Navigation2FiftyWrapper>
      <div className='nav2f'>
        <div className='nav-header'>
          <h2>目录</h2>
        </div>
        <nav className='nav2f-nav'>
          <ul>
            {pageNames.map((item, index) => (
              <li key={index}>
                <Link
                  className={activeIndex === index ? 'isActive' : ''}
                  to={item.path}
                  onClick={() => handleClick(index)}
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