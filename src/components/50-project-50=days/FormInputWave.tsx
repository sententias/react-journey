import React, { useRef, useState } from 'react'
import FormInputWaveWrapper from './css/FormInputWaveWrapper.ts'

export const FormInputWave = () => {
  const emailArray = 'Email'.split('')
  const passwordArray = 'Password'.split('')

  const [isEmailActive, setEmailActive] = useState(false)
  const [isPasswordActive, setPasswordActive] = useState(false)

  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const handleFocus = (
    setMethod: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setMethod(true)
  }

  const handleBlur = (
    setMethod: React.Dispatch<React.SetStateAction<boolean>>,
    domRef: React.RefObject<HTMLInputElement>
  ) => {
    if (domRef.current?.value === '') setMethod(false)
  }

  return (
    <FormInputWaveWrapper>
      <h1>Login</h1>
      <form>
        <div className='form-group'>
          <label htmlFor='Email'>
            {emailArray.map((item: string, index: number) => (
              <span
                key={index}
                className={`wave ${isEmailActive ? 'active' : ''}`}
                style={{ transitionDelay: `${(index + 1) * 50}ms` }}
              >
                {item}
              </span>
            ))}
          </label>

          <input
            type='text'
            id='Email'
            name='Email'
            ref={emailRef}
            onFocus={() => handleFocus(setEmailActive)}
            onBlur={() => handleBlur(setEmailActive, emailRef)}
            required
          />
        </div>

        <div className='form-group'>
          <label htmlFor='password'>
            {passwordArray.map((item: string, index: number) => (
              <span
                key={index}
                className={`wave ${isPasswordActive ? 'active' : ''}`}
                style={{ transitionDelay: `${(index + 1) * 50}ms` }}
              >
                {item}
              </span>
            ))}
          </label>

          <input
            type='password'
            id='password'
            name='password'
            ref={passwordRef}
            onFocus={() => handleFocus(setPasswordActive)}
            onBlur={() => handleBlur(setPasswordActive, passwordRef)}
            required
          />
        </div>
        <button
          type='submit'
          onClick={(event) => event.preventDefault()}
        >
          Login
        </button>
      </form>
    </FormInputWaveWrapper>
  )
}

export default FormInputWave
