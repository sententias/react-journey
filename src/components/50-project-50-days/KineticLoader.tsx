import React from 'react'
import KineticLoaderWrapper from './css/KineticLoaderWrapper.ts'

export const KineticLoader = () => {
  const duration = 2000

  return (
    <KineticLoaderWrapper $duration={duration}>
        <div className='tri-angle A'></div>
        <div className='tri-angle B'></div>
    </KineticLoaderWrapper>
  )
}

export default KineticLoader
