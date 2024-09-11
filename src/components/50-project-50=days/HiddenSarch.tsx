import React, { PureComponent } from 'react';
import HiddenSarchWrapper from './css/HiddenSarch.ts';

interface HiddenSarchProps {}

interface HiddenSarchState {
  searchActive: boolean
}

export class HiddenSarch extends PureComponent<HiddenSarchProps, HiddenSarchState> {
  private linkElement: HTMLLinkElement | null = null;

  constructor(props: HiddenSarchProps) {
    super(props);
    this.state = {
      searchActive: false
    };
  }

  componentDidMount() {
    // 创建 link 元素
    this.linkElement = document.createElement('link');
    if (this.linkElement) {
      this.linkElement.rel = 'stylesheet';
      this.linkElement.href = 'https://at.alicdn.com/t/c/font_4649080_ay8uj2vi07j.css';
      document.head.appendChild(this.linkElement);
    }
  }

  componentWillUnmount() {
    // 清理 link 元素
    if (this.linkElement) {
      document.head.removeChild(this.linkElement);
    }
  }

  onClickSearch() {
    this.setState(prevState => ({
      searchActive: !prevState.searchActive
    }));
  }
  
  render() {
    const { searchActive } = this.state;
    return (
      <div className='search-box'>
        <input 
          type='text' 
          className={`search-content ${searchActive ? 'active' : ''}`} 
          // style={{ display: searchActive ? 'block' : 'none' }}
          placeholder='请输入搜索内容...'
        />
        <div className='iconfont icon-sousuo icon-style' onClick={() => this.onClickSearch()}></div>
      </div>
    );
  }
  
}

function withHiddenSarchWrapper(WrappedComponent: any) {
  return (props: any) => (
    <HiddenSarchWrapper>
      <WrappedComponent {...props} />
    </HiddenSarchWrapper>
  );
}

const WrappedHiddenSarch = withHiddenSarchWrapper(HiddenSarch);

export default WrappedHiddenSarch;
