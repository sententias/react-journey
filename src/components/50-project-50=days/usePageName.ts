import { useMemo } from 'react';
import ExpandingCard from './ExpandingCard.tsx';
import ProgressStep from './ProgressStep.tsx';
import RotatingNavigationAnimation from './RotatingNavigationAnimation.tsx';
import HiddenSarch from './HiddenSarch.tsx';
import BlurryLoading from './BlurryLoading.tsx';
import ScrollAnimation from './ScrollAnimation.tsx';
import Test from './Test.tsx';

export function usePageNames() {
  // 使用 useMemo 来缓存页面信息，避免不必要的重新计算
  const pageNames = useMemo(() => [
    { name: 'ExpandingCard', path: '/day1', component: ExpandingCard },
    { name: 'ProgressStep', path: '/day2', component: ProgressStep },
    { name: 'RotatingNavigationAnimation', path: '/day3', component: RotatingNavigationAnimation },
    { name: 'HiddenSarch', path: '/day4', component: HiddenSarch },
    { name: 'BlurryLoading', path: '/day5', component: BlurryLoading },
    { name: 'ScrollAnimation', path: '/day6', component: ScrollAnimation },
    { name: 'Test', path: '/test', component: Test },
  ], []) // 依赖数组为空表示此 memoized 值只会在组件挂载和卸载时计算

  return pageNames
}

export default usePageNames