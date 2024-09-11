import React, { useRef, useState } from 'react'
import RandomChoicePickerWrapper from './css/RandomChoicePickerWrapper.ts'
import styled from 'styled-components'

interface ChoiceProps {
  content: string
  active?: boolean
}

export const RandomChoicePicker: React.FC = () => {
  const [textArray, setTextArray] = useState<string[]>([])
  const [ActiveIndex, setActiveIndex] = useState<number>(-1)

  const textRef = useRef<HTMLTextAreaElement>(null)

  const handleTextInput = () => {
    if (textRef.current) {
      setTextArray(textRef.current.value.split('，'))
      setActiveIndex((prev) => (prev !== -1 ? -1 : prev))
    }
  }

  const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

  const beginDecide = async  (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      if (textArray.length > 0) {
        // 按下空格键后，生成一个随机数，用来决策，通过生成多次随机数模拟决策动画
        for (let i = 0; i < 20; i++) {
          const randomIndex = Math.floor(Math.random() * textArray.length)
          setActiveIndex(randomIndex)
          await sleep(100)
        }
        // void 0代表空表达式
        // 决策后应该将状态重置
        textRef.current !== null ? (textRef.current.value = '') : void 0
        //
      }
    }
  }

  return (
    <RandomChoicePickerWrapper>
      <div>
        输入你需要决策的选项，不同选项使用'，'进行分割，按'enter'进行决策
      </div>
      <textarea
        ref={textRef}
        onInput={handleTextInput}
        onKeyDown={beginDecide}
      ></textarea>
      <div className='ChoiceSet'>
        {/* 
          由于我们将textarea中的字符串按'，'分割为字符串数组，因此我们可以使用map进行映射
          每一个Choice都需要通过自身index判断是否被选中，如果等于ActiveIndex，则被选中，并且传入true，否则传入false
        */}
        {textArray.map((str, index) =>
          str !== '' ? (
            <Choice
              key={index}
              content={str}
              active={index === ActiveIndex}
            />
          ) : null
        )}
      </div>
    </RandomChoicePickerWrapper>
  )
}

export const Choice: React.FC<ChoiceProps> = (props) => {
  // 根据传入的值进行渲染
  const { content = '请输入内容', active = false } = props
  return <ChoiceWrapper active={active}>{content}</ChoiceWrapper>
}

const ChoiceWrapper = styled.div<{ active: boolean }>`
  background-color: ${(props) => (props.active ? '#28a745' : '#21d3ff')};
  font-size: small;
  color: white;
  padding: 5px 10px;
  border-radius: 18px;
  user-select: none;
`

export default RandomChoicePicker
