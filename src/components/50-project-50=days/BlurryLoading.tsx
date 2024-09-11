import React, { PureComponent } from 'react'
import BlurryLoadingWrapper from './css/BlurryLoading'

interface BlurryLoadingProps {}

interface BlurryLoadingState {}

export class BlurryLoading extends PureComponent<BlurryLoadingProps, BlurryLoadingState> {
  constructor(props: BlurryLoadingProps) {
    super(props)

    this.state = {}
  }
  render() {
    return (
      <div>
        <img alt='img' src='assrts/images/picture02.png'/>
      </div>
    )
  }
}

function withBlurryLoadingWrapper(WrappedComponent: any) {
  return (props: any) => (
    <BlurryLoadingWrapper>
      <WrappedComponent {...props} />
    </BlurryLoadingWrapper>
  )
}

const WrappedBlurryLoading = withBlurryLoadingWrapper(BlurryLoading)

export default WrappedBlurryLoading
