import React, { useRef, useState } from 'react'
import PasswordGeneratorWrapper from './css/PasswordGeneratorWrapper.ts'

export const PasswordGenerator = () => {
  const [length, setLength] = useState(20)
  const [includeUppercase, setIncludeUppercase] = useState(false)
  const [includeLowercase, setIncludeLowercase] = useState(true)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(false)
  const [password, setPassword] = useState('')

  const inputRef = useRef<HTMLInputElement>(null)

  const generatePassword = () => {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz'
    const numberChars = '0123456789'
    const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?'

    let charPool = ''
    if (includeUppercase) charPool += uppercaseChars
    if (includeLowercase) charPool += lowercaseChars
    if (includeNumbers) charPool += numberChars
    if (includeSymbols) charPool += symbolChars

    if (charPool.length === 0) return

    let newPassword = ''
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charPool.length)
      newPassword += charPool[randomIndex]
    }

    setPassword(newPassword)
  }

  const copyToClipboard = () => {
    if (inputRef.current) {
      navigator.clipboard
        .writeText(inputRef.current.value)
        .then(() => {
          alert('复制成功')
        })
        .catch((err) => {
          console.error('复制失败:', err)
        })
    }
  }

  return (
    <PasswordGeneratorWrapper>
      <div className='box'>
        <h2>密码生成器</h2>
        <div className='copy'>
          <input
            type='text'
            className='target'
            value={password}
            ref={inputRef}
            readOnly
          />
          <i
            className='iconfont icon-mti-fuzhi'
            onClick={copyToClipboard}
          />
        </div>
        <div className='settings'>
          <div className='setting'>
            <label htmlFor='length'>密码长度</label>
            <input
              type='number'
              id='length'
              min='4'
              max='20'
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
            />
          </div>
          <div className='setting'>
            <label htmlFor='uppercase'>包含大写字母</label>
            <input
              type='checkbox'
              id='uppercase'
              checked={includeUppercase}
              onChange={() => setIncludeUppercase((prev) => !prev)}
            />
          </div>
          <div className='setting'>
            <label htmlFor='lowercase'>包含小写字母</label>
            <input
              type='checkbox'
              id='lowercase'
              checked={includeLowercase}
              onChange={() => setIncludeLowercase((prev) => !prev)}
            />
          </div>
          <div className='setting'>
            <label htmlFor='numbers'>包含数字</label>
            <input
              type='checkbox'
              id='numbers'
              checked={includeNumbers}
              onChange={() => setIncludeNumbers((prev) => !prev)}
            />
          </div>
          <div className='setting'>
            <label htmlFor='symbols'>包含符号</label>
            <input
              type='checkbox'
              id='symbols'
              checked={includeSymbols}
              onChange={() => setIncludeSymbols((prev) => !prev)}
            />
          </div>
        </div>
        <button
          onClick={generatePassword}
          className='generate'
        >
          生成密码
        </button>
      </div>
    </PasswordGeneratorWrapper>
  )
}

export default PasswordGenerator
