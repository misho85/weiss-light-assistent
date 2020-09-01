import React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from './styles';
import { ListProvider } from './context/ListContext';
import { ResultsProvider } from './context/ResultsContext';
import Widget from './components/Widget';

const Wrapper = styled.div`
  width: auto;
  height: auto;
  padding: 5% 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <ListProvider>
        <ResultsProvider>
          <Widget />
        </ResultsProvider>
      </ListProvider>
    </Wrapper>
  );
}

export default App;
