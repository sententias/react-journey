import React, { useState } from 'react'
import TestWrapped from './css/TestWrapped.ts'

const Test = (props) => {
  const [mState, setMState] = useState([[1, 2, 3, 4, 5], 2, 3, 4, 5, 6])

  const set = () => setMState(mState.map((item, index) => index))

  return (
    <TestWrapped>
      <label>
        <div>a</div>
        <span>b</span>
        <span>c</span>
        <span>d</span>
      </label>
    </TestWrapped>
  )
}

export default Test
