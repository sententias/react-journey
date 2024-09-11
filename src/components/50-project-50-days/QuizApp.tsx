import React, { useState } from 'react';
import QuizAppWrapper from './css/QuizAppWrapper.ts';

interface QuizType {
  question: string;
  choices: string[];
  answer: string;
}

const quizzes: QuizType[] = [
  {
    question: '什么是地球的唯一天然卫星？',
    choices: ['火星', '月球', '金星', '太阳'],
    answer: '月球'
  },
  {
    question: 'JavaScript 中用于声明变量的关键字是什么？',
    choices: ['let', 'var', 'const', '以上都是'],
    answer: '以上都是'
  },
  {
    question: '哪一项是 CSS 样式属性？',
    choices: ['font-size', 'display', 'color', '以上都是'],
    answer: '以上都是'
  },
  {
    question: '以下哪个国家位于南半球？',
    choices: ['中国', '印度', '澳大利亚', '法国'],
    answer: '澳大利亚'
  },
  {
    question: '太阳系中最大的行星是哪个？',
    choices: ['地球', '木星', '土星', '火星'],
    answer: '木星'
  }
];

export const QuizApp = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [isEnd, setIsEnd] = useState(false);

  const nextQuestion = () => {
    if (selectedChoice) {
      if (selectedChoice === quizzes[currentIndex].answer) {
        setCorrectCount(correctCount + 1);
      }
      setSelectedChoice(null);
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        if (nextIndex >= quizzes.length) {
          setIsEnd(true);
          return prevIndex;
        }
        return nextIndex;
      });
    }
  };

  const restartQuiz = () => {
    setCurrentIndex(0);
    setCorrectCount(0);
    setSelectedChoice(null);
    setIsEnd(false);
  };

  const { question, choices } = isEnd
    ? { question: '', choices: [] }
    : quizzes[currentIndex];

  return (
    <QuizAppWrapper>
      <div className='box'>
        {isEnd ? (
          <>
            <div className='score'>回答正确次数: {correctCount}</div>
            <div
              className='button'
              onClick={restartQuiz}
            >
              重新答题
            </div>
          </>
        ) : (
          <>
            <h2>{question}</h2>
            <div className='content'>
              {choices.map((choice, index) => (
                <label htmlFor={`choice${index}`}>
                  <div
                    className='choice'
                    key={index}
                  >
                    {' '}
                    <input
                      type='radio'
                      id={`choice${index}`}
                      name='choices'
                      value={choice}
                      checked={selectedChoice === choice}
                      onChange={(e) => setSelectedChoice(e.target.value)}
                    />
                    {choice}
                  </div>
                </label>
              ))}
            </div>
            <div
              className='button'
              onClick={nextQuestion}
            >
              下一则问题
            </div>
          </>
        )}
      </div>
    </QuizAppWrapper>
  );
};

export default QuizApp;
