import React, { PureComponent } from 'react'
import BlurryLoadingWrapper from './css/BlurryLoading.ts'

interface BlurryLoadingProps {}

interface BlurryLoadingState {
  progress: number
}

export class BlurryLoading extends PureComponent<
  BlurryLoadingProps,
  BlurryLoadingState
> {
  constructor(props: BlurryLoadingProps) {
    super(props)

    this.state = {
      progress: 0
    }
  }

  componentDidMount(): void {
    const intervalId = setInterval(() => {
      this.setState((prevState) => {
        if (prevState.progress >= 100) {
          // 清除定时器
          clearInterval(intervalId)
        } else {
          return {
            progress: prevState.progress + 1
          }
        }
      })
    }, 20)
  }

  render() {
    return (
      <BlurryLoadingWrapper $progress={this.state.progress}>
        <div className='img-box'>
          <img
            className='img-blur'
            alt='img'
            src='assets/images/picture02.jpg'
          />
        </div>
      </BlurryLoadingWrapper>
    )
  }
}

export default BlurryLoading
