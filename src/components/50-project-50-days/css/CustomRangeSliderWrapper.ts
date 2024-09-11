import styled from 'styled-components';

const CustomRangeSliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .slider-container {
    position: relative;
    width: 100%;
  }

  .slider-value {
    position: absolute;
    top: -30px;
    font-size: 1rem;
    color: #333;
    white-space: nowrap;
  }

  input[type='range'] {
    width: 300px;
    cursor: pointer;
  }
`;

export default CustomRangeSliderWrapper;
