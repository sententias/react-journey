import React, { useRef, useState, useEffect } from 'react'
import DadJokesWrapper from './css/DadJokesWrapper.ts'

export const DadJokes = () => {
  const [jokes, setJokes] = useState([
    "I'm the joke",
    "I'm the king",
    "I'm the cat I'm the cat I'm the cat I'm the cat I'm the cat I'm the cat I'm the cat I'm the cat I'm the cat I'm the cat I'm the cat I'm the cat I'm the cat I'm the cat I'm the cat I'm the cat I'm the cat I'm the cat I'm the cat I'm the cat"
  ])
  const [currentJokeIndex, setCurrentJokeIndex] = useState(0)

  const secRef = useRef<HTMLElement | null>(null)

  const handleClick = () => {
    setCurrentJokeIndex((prevIndex) => (prevIndex + 1) % jokes.length)
  }

  return (
    <DadJokesWrapper>
      <h2>不要笑挑战</h2>

      <section
        ref={secRef}
        id={`joke${currentJokeIndex}`}
      >
        {jokes[currentJokeIndex]}
      </section>

      <button onClick={handleClick}>下一则笑话</button>
    </DadJokesWrapper>
  )
}

export default DadJokes
