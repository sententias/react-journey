import React, { PureComponent } from 'react'

interface WelcomeProps {}

interface WelcomeState {}

export class Welcome extends PureComponent<WelcomeProps, WelcomeState> {
  constructor(props: WelcomeProps) {
    super(props)

    this.state = {}
  }
  render() {
    return (
      <h1>
        Hello World
      </h1>
    )
  }
}

export default Welcome
