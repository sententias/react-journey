import React, { useState } from 'react';
import PasswordStrengthBackgroundWrapper from './css/PasswordStrengthBackgroundWrapper.ts';

export const PasswordStrengthBackground = () => {
  const [passwordLength, setPasswordLength] = useState(0);

  const handlePasswordChange = (event) => {
    setPasswordLength(event.target.value.length);
  };

  return (
    <PasswordStrengthBackgroundWrapper $length={passwordLength}>
      {/* 用于指定输入框的大小 */}
      <div className='box'>
        {/* 用于显示密码强度进度条 */}
        <div className='box-bright' />
        <div className='box-bright' />
        {/* 真正的内容在这，防止被blur模糊掉 */}
        <div className='content'>
          <div className='header1'>密码强度动画</div>
          <div className='header2'>输入密码查看变化</div>
          <div className='form-box'>
            <form>
              <div className='input-box'>
                <label htmlFor='email'>邮箱:</label>
                <input
                  type='text'
                  id='email'
                  placeholder='输入邮箱'
                />
              </div>
              <div className='input-box'>
                <label htmlFor='password'>密码:</label>
                <input
                  type='password'
                  id='password'
                  placeholder='输入密码'
                  onChange={handlePasswordChange}
                />
              </div>
              <div className='button'>提交</div>
            </form>
          </div>
        </div>
      </div>
    </PasswordStrengthBackgroundWrapper>
  );
};

export default PasswordStrengthBackground;
