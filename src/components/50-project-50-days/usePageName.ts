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
import MovieApp from './MovieApp.tsx';
import BackgroundSlider from './BackgroundSlider.tsx';
import ThemeClock from './ThemeClock.tsx';
import ToggleSwitch from '../widgets/ToggleSwitch.tsx';
import ButtonRippleEffect from './ButtonRippleEffect.tsx';
import DragNDrop from './DragNDrop.tsx';
import DrawingApp from './DrawingApp.tsx';
import KineticLoader from './KineticLoader.tsx';
import ContentPlaceholder from './ContentPlaceholder.tsx';
import StickyNavigation from './StickyNavigation.tsx';

export function usePageNames() {
  // 使用 useMemo 来缓存页面信息，避免不必要的重新计算
  const pageNames = useMemo(() => [
    { name: 'ExpandingCard',cName: '扩展卡片', path: '/day1', component: ExpandingCard },
    { name: 'ProgressStep',cName: '步骤进度条', path: '/day2', component: ProgressStep },
    { name: 'RotatingNavigationAnimation',cName: '旋转导航动画', path: '/day3', component: RotatingNavigationAnimation },
    { name: 'HiddenSarch',cName: '隐藏式搜索栏', path: '/day4', component: HiddenSarch },
    { name: 'BlurryLoading',cName: '模糊加载', path: '/day5', component: BlurryLoading },
    { name: 'ScrollAnimation',cName: '页面滚动动画', path: '/day6', component: ScrollAnimation },
    { name: 'SplitLandingPage',cName: '分割选择页面', path: '/day7', component: SplitLandingPage },
    { name: 'FormInputWave',cName: '海浪输入栏', path: '/day8', component: FormInputWave },
    { name: 'SoundBoard',cName: '音乐点击器', path: '/day9', component: SoundBoard },
    { name: 'DadJokes',cName: '随机笑话', path: '/day10', component: DadJokes },
    { name: 'EventKeycodes',cName: '键盘点击事件', path: '/day11', component: EventKeycodes },
    { name: 'FaqCollapse',cName: '问答折叠卡片', path: '/day12', component: FaqCollapse },
    { name: 'RandomChoicePicker',cName: '选择决策器', path: '/day13', component: RandomChoicePicker },
    { name: 'AnimatedNavigation',cName: '导航栏动画', path: '/day14', component: AnimatedNavigation },
    { name: 'IncrementingCounter',cName: '增长计数器', path: '/day15', component: IncrementingCounter },
    { name: 'DrinkWater',cName: '每日水计量', path: '/day16', component: DrinkWater },
    { name: 'MovieApp',cName: '电影软件', path: '/day17', component: MovieApp },
    { name: 'BackgroundSlider',cName: '背景滑动条', path: '/day18', component: BackgroundSlider },
    { name: 'ThemeClock',cName: '主题时钟', path: '/day19', component: ThemeClock },
    { name: 'ButtonRippleEffect',cName: '按钮涟漪效果', path: '/day20', component: ButtonRippleEffect },
    { name: 'DragNDrop',cName: '拖拽组件', path: '/day21', component: DragNDrop },
    { name: 'DrawingApp',cName: '绘画软件', path: '/day22', component: DrawingApp },
    { name: 'KineticLoader',cName: '加载动画', path: '/day23', component: KineticLoader },
    { name: 'ContentPlaceholder',cName: '内容占位符', path: '/day24', component: ContentPlaceholder },
    { name: 'StickyNavigation',cName: '粘性导航栏', path: '/day25', component: StickyNavigation },
    { name: 'Test',cName: '', path: '/test', component: Test },
  ], []) // 依赖数组为空表示此 memoized 值只会在组件挂载和卸载时计算

  return pageNames
}

export default usePageNames