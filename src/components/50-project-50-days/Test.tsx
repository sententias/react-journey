import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Test = () => {
  const duration = 3000 
  const [elements, setElements] = useState<{ id: number, createdAt: number }[]>([])
  const [nextId, setNextId] = useState(1) 

  const handleClick = () => {
    const newElement = { id: nextId, createdAt: Date.now() }

    setElements((prev) => [...prev, newElement])
    setNextId((prev) => prev + 1)

    setTimeout(() => {
      setElements((prev) => prev.filter((el) => el.createdAt > Date.now() - duration))
    }, duration)
  }

  return (
    <TestWrapper>
      <button onClick={handleClick}>Click me</button>
      <div className='elements-container'>
        {elements.map((el) => (
          <div key={el.id} className="element">Element {el.id}</div>
        ))}
      </div>
    </TestWrapper>
  )
}

const TestWrapper = styled.div`
  .element {
    width: 100px;
    height: 100px;
    background-color: skyblue;
    margin: 10px;
    display: inline-block;
    text-align: center;
    line-height: 100px;
    border-radius: 5px;
  }
`

export default Test
