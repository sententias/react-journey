import React, { PureComponent } from 'react'

interface LoadingProps {}

interface LoadingState {}

export class Loading extends PureComponent<LoadingProps, LoadingState> {
  constructor(props: LoadingProps) {
    super(props)

    this.state = {}
  }
  render() {
    return (
      <div>
        <img alt='img' src='assets/images/login_qr_loading.gif'/>
      </div>
    )
  }
}

export default Loading
