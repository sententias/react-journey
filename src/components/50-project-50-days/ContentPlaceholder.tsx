import React, { useEffect, useState } from 'react'
import ContentPlaceholderWrapper from './css/ContentPlaceholderWrapper.ts'
import '@/components/widgets/HolderAnimation.css'

export const ContentPlaceholder = () => {
  const [isWait, setWait] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setWait(false)
    }, 5000)
  })
  return (
    <ContentPlaceholderWrapper>
      <div className='card'>
        <div className={`header ${isWait ? 'holder-animation' : ''}`}></div>
        <div className={`content ${isWait ? 'holder-animation' : ''}`}></div>
        <div className={`footer ${isWait ? 'holder-animation' : ''}`}></div>
      </div>
    </ContentPlaceholderWrapper>
  )
}

export default ContentPlaceholder
