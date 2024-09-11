import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Test = () => {
  return (
    <TestWrapper>
      <div className='content'>
        {false ? (
          <div>please wait...</div>
        ) : (
          <div className='holder-animation'></div>
        )}
      </div>
    </TestWrapper>
  )
}

const TestWrapper = styled.div`
  .content {
    width: 100px;
    height: 100px;
    background-color: skyblue;
  }
  @keyframes bgPos {
    0% {
      background-position: 50% 0;
    }
    100% {
      background-position: -150% 0;
    }
  }

  .holder-animation {
    background-image: linear-gradient(
      to right,
      #f6f7f8 0%,
      #edeef1 10%,
      #f6f7f8 20%,
      #f6f7f8 100%
    );
    background-size: 200% 100%;
    animation: bgPos 1s linear infinite;
    inset: 0;
  }
`

export default Test
