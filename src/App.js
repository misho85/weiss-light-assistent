import React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from './styles';
import { ListProvider } from './context/ListContext';
import Widget from './components/Widget';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0 5%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <ListProvider>
        <Widget />
      </ListProvider>
    </Wrapper>
  );
}

export default App;
