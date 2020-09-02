import React, { useContext } from 'react';
import styled from 'styled-components';
import { ResultsContext } from '../context/ResultsContext';
import List from './List';
import Form from './Form';
import Products from './Products';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${p => p.theme.maxWidth.xLarge`
    flex-direction: column;
  `}
  ${p => p.theme.maxWidth.phone`
    width: 100%;
  `}
`;

const WidgetWrapper = styled.div`
  ${p => p.theme.maxWidth.phone`
    width: 100%;
  `}
`;

const TitleBox = styled.div`
  text-align: end;
  padding-right: 10%;
  margin-bottom: 0.5em;

  > span {
    font-size: 2em;
    text-transform: uppercase;
  }
`;

const Brand = styled.span`
  font-weight: 300;
`;
const Name = styled.span`
  font-weight: 600;
`;

const Container = styled.div`
  width: 50em;
  height: 40em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: ${p => p.theme.colors.grayLight};
  border-top: 0.5em solid ${p => p.theme.colors.blueLight};
  transition: all 0.2s ease-in-out;
  ${p => p.theme.maxWidth.phone`
    width: 100%;
    height: auto;
  `}
`;

const Box = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5em 4.5em;
  ${p => p.theme.maxWidth.phone`
    padding: 1em;
  `}
`;

const Submit = styled.button`
  background-color: ${p => p.theme.colors.blueLight};
  font-size: 1.5em;
  border-radius: 0.5em;
  width: auto;
  padding: 3% 5%;
  margin: auto;
  transition: all 200ms;

  &:hover {
    background-color: ${p => p.theme.colors.pink};
  }
`;

const Widget = () => {
  const { showResults } = useContext(ResultsContext);

  return (
    <Wrapper>
      <WidgetWrapper>
        <TitleBox>
          <Brand>Weiss light </Brand>
          <Name>Assistent</Name>
        </TitleBox>
        <Container>
          <Box>
            <List />
            <Form />
            <Submit type="submit" form="calc-form">
              Obračunaj
            </Submit>
          </Box>
        </Container>
      </WidgetWrapper>
      {showResults && <Products />}
    </Wrapper>
  );
};

export default Widget;
