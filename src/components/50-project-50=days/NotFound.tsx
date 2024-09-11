import React, { PureComponent } from 'react'

interface NotFoundProps {}

interface NotFoundState {}

export class NotFound extends PureComponent<NotFoundProps, NotFoundState> {
  constructor(props: NotFoundProps) {
    super(props)

    this.state = {}
  }
  render() {
    return (
      <h1>
        ooooops! There is no pages!
      </h1>
    )
  }
}

export default NotFound
