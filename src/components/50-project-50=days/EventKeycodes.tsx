import React, { Fragment, useEffect, useState } from 'react'
import EventKeycodesWrapper from './css/EventKeycodesWrapper.ts'

export const EventKeycodes = () => {
  const [key, setKey] = useState<string | undefined>()
  const [keyCode, setKeyCode] = useState<number | undefined>()
  const [code, setCode] = useState<string | undefined>()

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      setKey(event.key)
      setKeyCode(event.keyCode)
      setCode(event.code)
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <EventKeycodesWrapper>
      {key === undefined ? (
        '请点击键盘任意键'
      ) : (
        <Fragment>
          <div>Key: {key}</div>
          <div>Key Code: {keyCode}</div>
          <div>Code: {code}</div>
        </Fragment>
      )}
    </EventKeycodesWrapper>
  )
}

export default EventKeycodes
