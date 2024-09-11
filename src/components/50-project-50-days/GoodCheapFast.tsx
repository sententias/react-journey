import React, { useState } from 'react'
import GoodCheapFastWrapper from './css/GoodCheapFastWrapper.ts'

export const GoodCheapFast = () => {
  const [state, setState] = useState({
    better: false,
    cheaper: false,
    faster: false
  })

  const handleToggle = (key) => {
    setState((prevState) => {
      const newState = { ...prevState, [key]: !prevState[key] }
      const activeCount = Object.values(newState).filter(Boolean).length

      if (activeCount > 2) {
        const [firstKey] = Object.keys(prevState).filter(
          (k) => prevState[k] && k !== key
        )
        newState[firstKey] = false
      }

      return newState
    })
  }

  return (
    <GoodCheapFastWrapper>
      <div>你想开发一个怎样的项目？</div>
      <div
        className='toggle'
        onClick={() => handleToggle('better')}
      >
        <input
          type='checkbox'
          checked={state.better}
          readOnly
        />
        <span className='slider'></span>
        <p className='description'>更好</p>
      </div>
      <div
        className='toggle'
        onClick={() => handleToggle('cheaper')}
      >
        <input
          type='checkbox'
          checked={state.cheaper}
          readOnly
        />
        <span className='slider'></span>
        <p className='description'>更便宜</p>
      </div>
      <div
        className='toggle'
        onClick={() => handleToggle('faster')}
      >
        <input
          type='checkbox'
          checked={state.faster}
          readOnly
        />
        <span className='slider'></span>
        <p className='description'>更快</p>
      </div>
    </GoodCheapFastWrapper>
  )
}

export default GoodCheapFast
