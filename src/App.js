import React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from './styles';
import { ListProvider } from './context/ListContext';
import { ResultsProvider } from './context/ResultsContext';
import Widget from './components/Widget';
import { PageOrnament } from './assets/graphics';

const Wrapper = styled.div`
  width: auto;
  height: auto;
  padding: 5% 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Ornament = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  > svg {
    width: 30em;
    height: 15em;
    ${p => p.theme.maxWidth.tablet`
      width: 20em;
      height: 10em;
    `}
  }

  ${p => p.theme.maxWidth.phone`
    display: none;
  `}
`;

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <ListProvider>
        <ResultsProvider>
          <Ornament>
            <PageOrnament />
          </Ornament>
          <Widget />
        </ResultsProvider>
      </ListProvider>
    </Wrapper>
  );
}

export default App;
