import React, { Fragment, useState } from 'react'
import FaqCollapseWrapper from './css/FaqCollapseWrapper.ts'
import styled from 'styled-components'
import '../../assets/icon/iconfont.css'

export const FaqCollapse = () => {
  return (
    <FaqCollapseWrapper>
      <h2>常见问题解答</h2>
      <Collapse />
      <Collapse answer='我是回答我是回答我是回答我是回答我是回答我是回答我是回答我是回答我是回答我是回答我是回答我是回答我是回答我是回答我是回答我是回答我是回答我是回答我是回答我是回答我是回答我是回答我是回答我是回答我是回答我是回答我是回答我是回答'/>
    </FaqCollapseWrapper>
  )
}

export const Collapse = (props) => {
  const { question = '我是提问' } = props
  const { answer = '我是回答' } = props

  const [isCallpsed, setCallpsed] = useState(false)

  const handleClick = () => {
    setCallpsed((prev) => !prev)
  }

  return (
    <CollapseWrapper $isCallpsed={isCallpsed}>
      <div className={`content ${isCallpsed ? 'active' : ''}`}>{question}</div>
      {isCallpsed && <div className='answer'>{answer}</div>}
      <div
        className='icon'
        onClick={handleClick}
      >
        <i
          className={`iconfont ${
            isCallpsed ? 'icon-mti-guanbi' : 'icon-mti-jiantouxia'
          }`}
        />
      </div>
    </CollapseWrapper>
  )
}

interface CollapseWrapperProps {
  $isCallpsed: boolean
}

const CollapseWrapper = styled.div<CollapseWrapperProps>`
  width: 50vw;
  min-height: 10vh;
  background-color: #79ccec;
  border-radius: 20px;
  display: grid;
  grid-template-columns: 1fr auto; /* 第一列占用剩余空间，第二列宽度自动 */
  /* grid-template-rows: ${(props) => (props.$isCallpsed ? 'auto 1fr' : 'auto')}; */
  gap: 10px;
  place-items: center;
  margin: 10px;

  .content {
    padding: 20px;
    color: #000000;
    grid-column: 1;
    grid-row: 1;
    align-self: self-start;
  }

  .answer {
    padding: 20px;
    grid-column: 1;
    grid-row: 2;
    color: #5b5b5b;
    justify-self: self-start;
    align-self: self-start;
  }

  .icon {
    grid-column: 2;
    grid-row: 1;
    padding: 20px;
    align-self: self-start;
    user-select: none;
    cursor: pointer;
  }
`

export default FaqCollapse
