import React, { PureComponent } from 'react'
import { Route, Routes } from 'react-router-dom'
import Welcome from './Welcome.tsx'
import WrappedExpandingCard from './ExpandingCard.tsx'
import NotFound from './NotFound.tsx'
import ContentsWrapper from './css/ContentsStyled.js'
import WrappedProgressStep from './ProgressStep.tsx'
import WrappedRotatingNavigationAnimation from './RotatingNavigationAnimation.tsx'
import WrappedHiddenSarch from './HiddenSarch.tsx'
import Loading from './Loading.tsx'
import WrappedBlurryLoading from './BlurryLoading.tsx'
import ScrollAnimation from './ScrollAnimation.tsx'
import Test from './Test.tsx'

interface ContentsProps {}

interface ContentsState {}

export class Contents extends PureComponent<ContentsProps, ContentsState> {
  constructor(props: ContentsProps) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <section className='nav2fbox'>
        <Routes>
          <Route
            path='/'
            element={<Welcome />}
          />
          <Route
            path='/day1'
            element={<WrappedExpandingCard />}
          />
          <Route
            path='/day2'
            element={<WrappedProgressStep />}
          />
          <Route
            path='/day3'
            element={<WrappedRotatingNavigationAnimation />}
          />
          <Route
            path='/day4'
            element={<WrappedHiddenSarch />}
          />
          <Route
            path='/day5'
            element={<WrappedBlurryLoading />}
          />
          <Route
            path='/day6'
            element={<ScrollAnimation />}
          />
          <Route
            path='/test'
            element={<Test />}
          />
          <Route
            path='*'
            element={<NotFound />}
          />
        </Routes>
      </section>
    )
  }
}

function withContentsWrapper(WrappedComponent: any) {
  return (props: any) => (
    <ContentsWrapper>
      <WrappedComponent {...props} />
    </ContentsWrapper>
  )
}

const WrappedContents = withContentsWrapper(Contents)

export default WrappedContents
