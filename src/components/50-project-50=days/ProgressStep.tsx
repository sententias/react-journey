import React, { PureComponent, Fragment } from 'react'
import ProgressStepWrapper from './css/ProgressStepStyled.ts'

interface ProgressStepProps {}

interface ProgressStepState {
  stepNumberArrays: number[]
  activeIndex: number
}

export class ProgressStep extends PureComponent<
  ProgressStepProps,
  ProgressStepState
> {
  constructor(props: ProgressStepProps) {
    super(props)

    this.state = {
      stepNumberArrays: [1, 2, 3, 4, 5],
      activeIndex: 0
    }
  }

  onClickStepNext() {
    this.setState((prevState) => {
      const { activeIndex } = prevState
      const { stepNumberArrays } = this.state
  
      if (activeIndex < stepNumberArrays.length - 1) {
        return { activeIndex: activeIndex + 1 }
      } else {
        return null
      }
    });
  }
  

  onClickStepPrev() {
    this.setState((prevState) => {
      const { activeIndex } = prevState
  
      if (activeIndex > 0) {
        return { activeIndex: activeIndex - 1 };
      } else {
        return null;
      }
    });
  }

  render() {
    const { stepNumberArrays, activeIndex } = this.state

    return (
      <Fragment>
        <div className='progress-step-box'>
          {stepNumberArrays.map((item: number, index: number) => (
            <Fragment key={index}>
              <div className={`circle ${index <= activeIndex ? 'is-circle-active' : ''}`}>
                <div className='step'>{item}</div>
              </div>
              {index < stepNumberArrays.length - 1 && (
                <div className={`stick ${index <= activeIndex - 1 ? 'is-stick-active' : ''}`}></div>
              )}
            </Fragment>
          ))}
        </div>
        <div className='control-button'>
          <button
            className={`button button-prev ${
              activeIndex > 0 ? 'isButtonActive' : ''
            }`}
            onClick={() => this.onClickStepPrev()}
          >
            前一个
          </button>
          <button
            className={`button button-next ${
              activeIndex < stepNumberArrays.length - 1 ? 'isButtonActive' : ''
            }`}
            onClick={() => this.onClickStepNext()}
          >
            后一个
          </button>
        </div>
      </Fragment>
    )
  }
}

function withProgressStepWrapper(WrappedComponent: any) {
  return (props: ProgressStepProps) => (
    <ProgressStepWrapper>
      <WrappedComponent {...props} />
    </ProgressStepWrapper>
  )
}

const WrappedProgressStep = withProgressStepWrapper(ProgressStep)

export default WrappedProgressStep
