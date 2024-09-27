import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import styled from 'styled-components';
import { Button, notification } from 'antd';

const Test = () => {
  const show = () => {
    notification.info({description:'hellow',message:'啥？'});
  }

  const myRender = () => {
    const div = document.createElement('div');
    div.id = 'render';
    document.body.appendChild(div); 
  
    const root = ReactDOM.createRoot(document.querySelector('#render') as HTMLElement);
    root.render(<h1>Hello, world!</h1>); 
  };

  return (
    <TestWrapper>
      <Button onClick={show}>Click Me</Button>
      <Button onClick={myRender}>Test</Button>
    </TestWrapper>
  );
};

const TestWrapper = styled.div``;

export default Test;
