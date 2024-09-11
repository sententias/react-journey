import React, { useState, useEffect } from 'react';
import TestimonialBoxSwitcherWrapper from './css/TestimonialBoxSwitcherWrapper.ts';

const DURATION = 4000;

export const TestimonialBoxSwitcher = () => {
  const interduce: string[] = [
    '现代科技正在改变我们的生活方式。从智能手机到人工智能，这些技术不仅提高了我们的效率，还带来了新的可能性。探索这些科技进步如何影响我们的日常生活，了解它们如何塑造未来。',
    '经典文学作品如《傲慢与偏见》和《1984》拥有持久的吸引力。它们不仅反映了作者的时代背景，还深入探讨了人性的复杂性。阅读这些作品，可以让我们更好地理解人类的历史和情感。',
    '健康饮食对于维持身体健康至关重要。均衡摄入水果、蔬菜和全谷物，可以帮助我们获得足够的营养。了解如何通过饮食保持身体健康，并享受美味的食物，是实现健康生活的关键。',
    '绿色城市空间对提高生活质量具有重要作用。公园、绿道和城市花园不仅美化了环境，还提供了休闲和社交的空间。城市绿化是建设可持续、宜居城市的重要一步。',
    '学习一门新语言可以打开新的文化和职业机会。它不仅提升了我们的沟通能力，还增强了认知能力。掌握新语言的过程中，我们不仅了解了新的表达方式，还扩展了全球视野。'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % interduce.length);
    }, DURATION);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <TestimonialBoxSwitcherWrapper $duration={DURATION}>
      <div className='box'>
        {/* 如果CSS动画设置为infinite，虽然和js定时器的DRURATION一致，但由于两者分开计时，有可能出现不同步的情况，因此每次index更新时重新渲染progress-bar，解决问题 */}
        <div
          className='progress-bar'
          key={currentIndex}
        ></div>
        <div className='content'>{interduce[currentIndex]}</div>
        <div className='avatar'></div>
      </div>
    </TestimonialBoxSwitcherWrapper>
  );
};

export default TestimonialBoxSwitcher;
