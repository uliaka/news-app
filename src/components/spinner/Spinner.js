import React from 'react';
import styled, { keyframes } from 'styled-components';

const SpinnerContainer = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`
const SpinnerSection = styled.div`
  border: 6px solid #f3f3f3;
  border-radius: 50%;
  border-top: 6px solid grey;
  width: 30px;
  height: 30px;
  animation: ${spin} 1.5s linear infinite;
`

const Spinner = () => (
  <SpinnerContainer>
    <SpinnerSection />
  </SpinnerContainer>
)

export default Spinner;