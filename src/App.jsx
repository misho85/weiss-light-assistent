import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import styled from 'styled-components';

import { PageOrnament } from './assets/graphics';
import SEO from './components/SEO';
import Widget from './components/Widget';
import config from './config';
import { ListProvider } from './context/ListContext';
import { ResultsProvider } from './context/ResultsContext';
import { GlobalStyle } from './styles';

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
  z-index: -1;

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
  useEffect(() => {
    ReactGA.initialize(config.googleAnalyticsID);
    ReactGA.pageview(window.location.pathname);
  });

  return (
    <Wrapper>
      <SEO />
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
