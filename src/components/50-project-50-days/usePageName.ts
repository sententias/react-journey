import { useMemo } from 'react';
import ExpandingCard from './ExpandingCard.tsx';
import ProgressStep from './ProgressStep.tsx';
import RotatingNavigationAnimation from './RotatingNavigationAnimation.tsx';
import HiddenSarch from './HiddenSarch.tsx';
import BlurryLoading from './BlurryLoading.tsx';
import ScrollAnimation from './ScrollAnimation.tsx';
import Test from './Test.tsx';
import SplitLandingPage from './SplitLandingPage.tsx';
import FormInputWave from './FormInputWave.tsx';
import SoundBoard from './SoundBoard.tsx';
import DadJokes from './DadJokes.tsx';
import EventKeycodes from './EventKeycodes.tsx';
import FaqCollapse from './FaqCollapse.tsx';
import RandomChoicePicker from './RandomChoicePicker.tsx';
import AnimatedNavigation from './AnimatedNavigation.tsx';
import IncrementingCounter from './IncrementingCounter.tsx';
import DrinkWater from './DrinkWater.tsx';

export function usePageNames() {
  // 使用 useMemo 来缓存页面信息，避免不必要的重新计算
  const pageNames = useMemo(() => [
    { name: 'ExpandingCard',cname: '扩展卡片', path: '/day1', component: ExpandingCard },
    { name: 'ProgressStep',cname: '步骤进度条', path: '/day2', component: ProgressStep },
    { name: 'RotatingNavigationAnimation',cname: '旋转导航动画', path: '/day3', component: RotatingNavigationAnimation },
    { name: 'HiddenSarch',cname: '隐藏式搜索栏', path: '/day4', component: HiddenSarch },
    { name: 'BlurryLoading',cname: '模糊加载', path: '/day5', component: BlurryLoading },
    { name: 'ScrollAnimation',cname: '页面滚动动画', path: '/day6', component: ScrollAnimation },
    { name: 'SplitLandingPage',cname: '分割选择页面', path: '/day7', component: SplitLandingPage },
    { name: 'FormInputWave',cname: '海浪输入栏', path: '/day8', component: FormInputWave },
    { name: 'SoundBoard',cname: '音乐点击器', path: '/day9', component: SoundBoard },
    { name: 'DadJokes',cname: '随机笑话', path: '/day10', component: DadJokes },
    { name: 'EventKeycodes',cname: '键盘点击事件', path: '/day11', component: EventKeycodes },
    { name: 'FaqCollapse',cname: '问答折叠卡片', path: '/day12', component: FaqCollapse },
    { name: 'RandomChoicePicker',cname: '选择决策器', path: '/day13', component: RandomChoicePicker },
    { name: 'AnimatedNavigation',cname: '导航栏动画', path: '/day14', component: AnimatedNavigation },
    { name: 'IncrementingCounter',cname: '增长计数器', path: '/day15', component: IncrementingCounter },
    { name: 'DrinkWater',cname: '每日水计量', path: '/day16', component: DrinkWater },
    { name: 'Test',cname: '', path: '/test', component: Test },
  ], []) // 依赖数组为空表示此 memoized 值只会在组件挂载和卸载时计算

  return pageNames
}

export default usePageNames