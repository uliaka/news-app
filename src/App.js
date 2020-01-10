import React from 'react';
import './App.css';
import styled from 'styled-components';

const AppWrapper = styled.div`
  text-align: center;
`

const Line = styled.div`
  border: 5px solid red;
  width: 100%;
`

function App() {
  return (
    <AppWrapper>
        <Line/>
    </AppWrapper>
  );
}

export default App;
