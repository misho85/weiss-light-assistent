import React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from './styles';
import Widget from './components/Widget';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Widget />
    </Wrapper>
  );
}

export default App;
