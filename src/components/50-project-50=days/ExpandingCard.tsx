import React, { PureComponent } from 'react';
import ExpandingCardWrapper from './css/ExpandingCardStyled.ts';

interface Image {
  id: number
  url: string
}

interface ExpandingCardState {
  imagesInfo: Image[]
  activeIndex: number | null
}

interface ExpandingCardProps {}

export class ExpandingCard extends PureComponent<
  ExpandingCardProps,
  ExpandingCardState
> {
  constructor(props: ExpandingCardProps) {
    super(props)

    this.state = {
      imagesInfo: [],
      activeIndex: 0, 
    };
  }

  componentDidMount() {
    fetch('https://picsum.photos/v2/list?page=1&limit=5')
      .then((response) => response.json())
      .then((data) => {
        
        const images = data.map((item: any) => ({
          id: item.id,
          url: item.download_url,
        }))
        this.setState({ imagesInfo: images })
      })
      .catch((error) => {
        console.error('Error fetching images:', error)
      });
  }

  onClickExpanding = (index: number) => {
    this.setState(() => ({
      activeIndex: index,
    }))
  }

  render() {
    const { imagesInfo, activeIndex } = this.state

    return (
      <ExpandingCardWrapper>
        <div className='ExpandingCardBox'>
          {imagesInfo.map((item: Image, index: number) => (
            <div
              className={`mini-card ${index === activeIndex ? 'isActive' : ''}`}
              key={item.id}
              style={{ backgroundImage: `url(${item.url})` }}
              onClick={() => this.onClickExpanding(index)}
            ></div>
          ))}
        </div>
      </ExpandingCardWrapper>
    )
  }
}

function withExpandingCardWrapper(WrappedComponent: any) {
  return (props: any) => (
    <ExpandingCardWrapper>
      <WrappedComponent {...props} />
    </ExpandingCardWrapper>
  )
}
const WrappedExpandingCard = withExpandingCardWrapper(ExpandingCard)

export default WrappedExpandingCard
