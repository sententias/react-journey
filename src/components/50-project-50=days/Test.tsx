import React, { useState } from 'react'
import TestWrapped from './css/TestWrapped.ts'

const Test = (props) => {
  const [mState, setMState] = useState([[1, 2, 3, 4, 5], 2, 3, 4, 5, 6])

  const set = () => setMState(mState.map((item, index) => index))

  return (
    <TestWrapped>
      {mState}
      <button onClick={() => set}>config</button>
    </TestWrapped>
  )
}

export default Test
