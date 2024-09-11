import React, { useRef } from 'react';
import VerifyAccountUiWrapper from './css/VerifyAccountUiWrapper.ts';

const VERIFY_LENGTH = 6;

export const VerifyAccountUi = ({ email }) => {
  const inputsRef = useRef<HTMLInputElement[]>([]);
  email = 'koveer@163.com';

  const numberInput = (e, index) => {
    const { value } = e.target;
    // 正则表达式判断是否为单个数字，两个//会自动解析为正则
    const regex = /^\d$/;
    if (regex.test(value)) {
      if (index < inputsRef.current.length - 1 && value.length === 1) {
        inputsRef.current[index+1].focus();
      }
    } else {
      e.target.value = '';
    }
  };

  const deleteNumber = (e, index) => {
    const { key, keyCode } = e;
    const input = e.target as HTMLInputElement;

    if (key === 'Backspace' && input.value === '') {
      if (index > 0) {
        inputsRef.current[index - 1].focus();
      }
    } else if (keyCode >= 48 && keyCode <= 57) {
      const digit = keyCode - 48;
      input.value = digit.toString();
      numberInput(e, index);
      e.preventDefault();
    }
  };

  return (
    <VerifyAccountUiWrapper>
      <div className='box'>
        <div className='interduce-box'>
          <div className='header1'>认证你的账户</div>
          <div className='description'>
            我们已经将验证码发往你的邮箱{email}
            ,请输入您在邮箱中获取的验证码帮助我们对您进行认证。
          </div>
        </div>
        <div className='input-box'>
          <form>
            {[...Array(VERIFY_LENGTH)].map((_, index) => (
              <input
                key={index}
                type='text'
                className='number'
                maxLength={1}
                ref={(el) => (inputsRef.current[index] = el as HTMLInputElement)}
                onChange={(e) => numberInput(e, index)}
                onKeyDown={(e) => deleteNumber(e, index)}
              />
            ))}
          </form>
        </div>
      </div>
    </VerifyAccountUiWrapper>
  );
};

export default VerifyAccountUi;
