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
import ButtonRippleEffect from './ButtonRippleEffect.tsx';
import DragNDrop from './DragNDrop.tsx';
import DrawingApp from './DrawingApp.tsx';
import KineticLoader from './KineticLoader.tsx';
import ContentPlaceholder from './ContentPlaceholder.tsx';
import StickyNavigation from './StickyNavigation.tsx';
import DoubleVerticalSlider from './DoubleVerticalSlider.tsx';
import ToastNotification from './ToastNotification.tsx';
import GithubProfiles from './GithubProfiles.tsx';
import DoubleClickHeart from './DoubleClickHeart.tsx';
import AutoTextEffect from './AutoTextEffect.tsx';
import PasswordGenerator from './PasswordGenerator.tsx';
import GoodCheapFast from './GoodCheapFast.tsx';
import NotesApp from './NotesApp.tsx';
import AnimatedCountdown from './AnimatedCountdown.tsx';
import ImageCarousel from './ImageCarousel.tsx';
import Hoverboard from './Hoverboard.tsx';
import Pokedex from './Pokedex.tsx';
import MobileTabNavigation from './MobileTabNavigation.tsx';
import PasswordStrengthBackground from './PasswordStrengthBackground.tsx';
import ThirdBackgroundBoxes from './ThirdBackgroundBoxes.tsx';
import VerifyAccountUi from './VerifyAccountUi.tsx';
import LiveUserFilter from './LiveUserFilter.tsx';
import FeedbackUiFesign from './FeedbackUiFesign.tsx';
import CustomRangeSlider from './CustomRangeSlider.tsx';
import NetflixMobileNavigation from './NetflixMobileNavigation.tsx';
import QuizApp from './QuizApp.tsx';
import TestimonialBoxSwitcher from './TestimonialBoxSwitcher.tsx';
import RandomImageGenerator from './RandomImageGenerator.tsx';
import TodoList from './TodoList.tsx';
import InsectCatchGame from './InsectCatchGame.tsx';

export function usePageNames() {
  // 使用 useMemo 来缓存页面信息，避免不必要的重新计算
  const pageNames = useMemo(() => [
    { name: 'ExpandingCard',cName: '扩展卡片', path: '/50p50d/day1', component: ExpandingCard },
    { name: 'ProgressStep',cName: '步骤进度条', path: '/50p50d/day2', component: ProgressStep },
    { name: 'RotatingNavigationAnimation',cName: '旋转导航动画', path: '/50p50d/day3', component: RotatingNavigationAnimation },
    { name: 'HiddenSarch',cName: '隐藏式搜索栏', path: '/50p50d/day4', component: HiddenSarch },
    { name: 'BlurryLoading',cName: '模糊加载', path: '/50p50d/day5', component: BlurryLoading },
    { name: 'ScrollAnimation',cName: '页面滚动动画', path: '/50p50d/day6', component: ScrollAnimation },
    { name: 'SplitLandingPage',cName: '分割选择页面', path: '/50p50d/day7', component: SplitLandingPage },
    { name: 'FormInputWave',cName: '海浪输入栏', path: '/50p50d/day8', component: FormInputWave },
    { name: 'SoundBoard',cName: '音乐点击器', path: '/50p50d/day9', component: SoundBoard },
    { name: 'DadJokes',cName: '随机笑话', path: '/50p50d/day10', component: DadJokes },
    { name: 'EventKeycodes',cName: '键盘点击事件', path: '/50p50d/day11', component: EventKeycodes },
    { name: 'FaqCollapse',cName: '问答折叠卡片', path: '/50p50d/day12', component: FaqCollapse },
    { name: 'RandomChoicePicker',cName: '选择决策器', path: '/50p50d/day13', component: RandomChoicePicker },
    { name: 'AnimatedNavigation',cName: '导航栏动画', path: '/50p50d/day14', component: AnimatedNavigation },
    { name: 'IncrementingCounter',cName: '增长计数器', path: '/50p50d/day15', component: IncrementingCounter },
    { name: 'DrinkWater',cName: '每日水计量', path: '/50p50d/day16', component: DrinkWater },
    { name: 'MovieApp',cName: '电影软件', path: '/50p50d/day17', component: MovieApp },
    { name: 'BackgroundSlider',cName: '背景滑动条', path: '/50p50d/day18', component: BackgroundSlider },
    { name: 'ThemeClock',cName: '主题时钟', path: '/50p50d/day19', component: ThemeClock },
    { name: 'ButtonRippleEffect',cName: '按钮涟漪效果', path: '/50p50d/day20', component: ButtonRippleEffect },
    { name: 'DragNDrop',cName: '拖拽组件', path: '/50p50d/day21', component: DragNDrop },
    { name: 'DrawingApp',cName: '绘画软件', path: '/50p50d/day22', component: DrawingApp },
    { name: 'KineticLoader',cName: '加载动画', path: '/50p50d/day23', component: KineticLoader },
    { name: 'ContentPlaceholder',cName: '内容占位符', path: '/50p50d/day24', component: ContentPlaceholder },
    { name: 'StickyNavigation',cName: '粘性导航栏', path: '/50p50d/day25', component: StickyNavigation },
    { name: 'DoubleVerticalSlider',cName: '双纵向滑动窗口', path: '/50p50d/day26', component: DoubleVerticalSlider },
    { name: 'ToastNotification',cName: '弹框通知', path: '/50p50d/day27', component: ToastNotification },
    { name: 'GithubProfiles',cName: 'github用户查询', path: '/50p50d/day28', component: GithubProfiles },
    { name: 'DoubleClickHeart',cName: '双击喜欢', path: '/50p50d/day29', component: DoubleClickHeart },
    { name: 'AutoTextEffect',cName: '文本走马灯', path: '/50p50d/day30', component: AutoTextEffect },
    { name: 'PasswordGenerator',cName: '密码生成器', path: '/50p50d/day31', component: PasswordGenerator },
    { name: 'GoodCheapFast',cName: '不可能三角', path: '/50p50d/day32', component: GoodCheapFast },
    { name: 'NotesApp',cName: '笔记应用', path: '/50p50d/day33', component: NotesApp },
    { name: 'AnimatedCountdown',cName: '动画倒计时', path: '/50p50d/day34', component: AnimatedCountdown },
    { name: 'ImageCarousel',cName: '图片幻灯片', path: '/50p50d/day35', component: ImageCarousel },
    { name: 'Hoverboard',cName: '悬浮颜色板', path: '/50p50d/day36', component: Hoverboard },
    { name: 'Pokedex',cName: '宝可梦图鉴', path: '/50p50d/day37', component: Pokedex },
    { name: 'MobileTabNavigation',cName: '手机导航栏', path: '/50p50d/day38', component: MobileTabNavigation },
    { name: 'PasswordStrengthBackground',cName: '密码强度背景', path: '/50p50d/day39', component: PasswordStrengthBackground },
    { name: 'ThirdBackgroundBoxes',cName: '3d背景盒子', path: '/50p50d/day40', component: ThirdBackgroundBoxes },
    { name: 'VerifyAccountUi',cName: '用户认证界面', path: '/50p50d/day41', component: VerifyAccountUi },
    { name: 'LiveUserFilter',cName: '在线用户过滤', path: '/50p50d/day42', component: LiveUserFilter },
    { name: 'FeedbackUiFesign',cName: '反馈界面', path: '/50p50d/day43', component: FeedbackUiFesign },
    { name: 'CustomRangeSlider',cName: '范围滑块', path: '/50p50d/day44', component: CustomRangeSlider },
    { name: 'NetflixMobileNavigation',cName: '移动导航栏', path: '/50p50d/day45', component: NetflixMobileNavigation },
    { name: 'QuizApp',cName: '问答应用', path: '/50p50d/day46', component: QuizApp },
    { name: 'TestimonialBoxSwitcher',cName: '评价框切换器', path: '/50p50d/day47', component: TestimonialBoxSwitcher },
    { name: 'RandomImageGenerator',cName: '随机图片生成', path: '/50p50d/day48', component: RandomImageGenerator },
    { name: 'TodoList',cName: '待办事项', path: '/50p50d/day49', component: TodoList },
    { name: 'InsectCatchGame',cName: '捉虫游戏', path: '/50p50d/day50', component: InsectCatchGame },
    { name: 'Test',cName: '测试页面', path: '/test', component: Test },
  ], []) // 依赖数组为空表示此 memoized 值只会在组件挂载和卸载时计算

  return pageNames
}

export default usePageNames