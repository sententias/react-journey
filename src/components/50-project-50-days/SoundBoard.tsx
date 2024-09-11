import React, { useState, useEffect } from 'react'
import SoundBoardWrapper from './css/SoundBoardWrapper.ts'

export const SoundBoard = () => {
  const [audioArrays] = useState<string[]>([
    'assets/audio/audio01.wav',
    'assets/audio/audio02.wav',
    'assets/audio/audio03.wav',
    'assets/audio/audio04.wav',
    'assets/audio/audio05.wav',
    'assets/audio/audio06.wav'
  ])

  const playAudio = (index: number) => {
    const audio = new Audio(audioArrays[index])
    audio.play()
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key >= '1' && event.key <= '6') {
        const index = parseInt(event.key, 10) - 1
        playAudio(index)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  })

  return (
    <SoundBoardWrapper>
      {audioArrays.map((_, index) => (
        <div
          className='card'
          key={index}
          onClick={() => playAudio(index)}
        >
          {index + 1}
        </div>
      ))}
    </SoundBoardWrapper>
  )
}

export default SoundBoard
