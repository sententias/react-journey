import React from 'react'
import styled from 'styled-components'

export const ToggleSwitch = () => {
  return <ToggleSwitchWrapper>
    <div className='left-background'/>
    <div className='toggle'>123</div>
    <div className='right-background'/>
    
  </ToggleSwitchWrapper>
}

const ToggleSwitchWrapper = styled.div`
  border: 2px solid gainsboro;
  border-radius: 5px;
  width: 10rem;
  display: flex;
  position: relative;

  .left-background {
    background-color: lightblue;
    flex: 1;
  }

  .toggle {
    position: absolute;
  }
`

export default ToggleSwitch
