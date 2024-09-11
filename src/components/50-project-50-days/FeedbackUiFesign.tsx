import React, { useState } from 'react';
import FeedbackUiFesignWrapper from './css/FeedbackUiFesignWrapper.ts';

export const FeedbackUiFesign = () => {
  const [isFeedback, setIsFeedback] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [activeChoice, setActiveChoice] = useState('');

  const choices = [
    { label: '满意', icon: 'icon-henkaixin' },
    { label: '还行', icon: 'icon-huanhang' },
    { label: '不行', icon: 'icon-bukaixin' },
  ];

  const handleChoiceClick = (choice) => {
    setFeedback(choice.label);
    setActiveChoice(choice.label);
  };

  return (
    <FeedbackUiFesignWrapper>
      {isFeedback ? (
        <div className='feedback-box'>
          <i className='iconfont icon-xin' />
          <div className='title'>感谢您</div>
          <div className='title'>您的评价是:{feedback}</div>
          <div className='content'>我们将继续努力，期待您的好评！</div>
        </div>
      ) : (
        <div className='choose-box'>
          <div className='title'>你对这个网站满意吗？</div>
          <div className='choose'>
            {choices.map((choice) => (
              <div
                key={choice.label}
                className={`choice ${activeChoice === choice.label ? 'active' : ''}`}
                onClick={() => handleChoiceClick(choice)}
              >
                <i className={`iconfont ${choice.icon}`} />
                <span>{choice.label}</span>
              </div>
            ))}
          </div>
          <div className='button' onClick={() => setIsFeedback(true)}>点击提交</div>
        </div>
      )}
    </FeedbackUiFesignWrapper>
  );
};

export default FeedbackUiFesign;
