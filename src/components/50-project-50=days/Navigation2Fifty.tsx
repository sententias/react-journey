import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import Navigation2FiftyWrapper from './css/Navigation2FiftyStyled.js'

interface Navigation2FiftyProps {}

interface Navigation2FiftyState {
  pageNames: { name: string; path: string }[]
  activeIndex: number | null
}

export class Navigation2Fifty extends PureComponent<
  Navigation2FiftyProps,
  Navigation2FiftyState
> {
  constructor(props: Navigation2FiftyProps) {
    super(props)

    this.state = {
      pageNames: [
        { name: 'ExpandingCard', path: '/day1' },
        { name: 'ProgressStep', path: '/day2' },
        { name: 'WrappedRotatingNavigationAnimation', path: '/day3' },
        { name: 'WrappedHiddenSarch', path: '/day4' },
        { name: 'Test', path: '/test' },
      ],
      activeIndex: null
    }
  }

  onClickActive = (index: number) => {
    this.setState({
      activeIndex: index
    })
  }

  render() {
    const { pageNames, activeIndex } = this.state
    return (
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
                  onClick={() => this.onClickActive(index)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    )
  }
}

function withNavigation2FiftyWrapper(WrappedComponent: any) {
  return (props: any) => (
    <Navigation2FiftyWrapper>
      <WrappedComponent {...props} />
    </Navigation2FiftyWrapper>
  )
}

const WrappedNavigation2Fifty = withNavigation2FiftyWrapper(Navigation2Fifty)

export default WrappedNavigation2Fifty
