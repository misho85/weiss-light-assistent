import React, { useContext, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import { Logo } from '~assets/graphics';
import { RoundCheck, RoundError } from '~assets/icons';
import { ResultsContext } from '~context/ResultsContext';

import CalcForm from './CalcFormV2';
import ContactForm from './ContactForm';
import List from './List';
import Products from './Products';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CalcWrapper = styled.div`
  display: flex;
  width: 100%;

  /* flex-wrap: wrap; */
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${p => p.theme.maxWidth.large`
    flex-direction: column;
  `}
`;

const WidgetWrapper = styled.div`
  width: ${p => (p.contact ? `100%` : `50em`)};
  margin-right: auto;
  ${p => p.theme.maxWidth.large`
    margin-right: unset;
  `}
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
  width: 100%;
  height: ${p => (p.contact ? `auto` : `40em`)};
  margin-top: ${p => (p.contact ? `1em` : 0)};
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: ${p => p.theme.colors.grayLight};
  transition: all 0.2s ease-in-out;
  ${p => p.theme.maxWidth.phone`
    height: auto;
  `}

  ${p =>
    p.topBorder &&
    css`
      border-top: 0.5em solid ${p.theme.colors.blueLight};
    `}

  ${p =>
    p.contact &&
    p.theme.maxWidth.large`
      flex-direction: column;
  `}
`;

const Box = styled.div`
  width: ${p => (p.contact ? `50em` : `100%`)};
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5em 4.5em;
  ${p => p.theme.maxWidth.phone`
    padding: 1em;
    width: 100%;
  `}
`;

const LogoContainer = styled.div`
  width: 40em;
  margin-left: 2em;
  display: flex;
  background-color: ${p => p.theme.colors.grayLight};

  > svg {
    margin: auto;
    width: 18em;
    height: 6em;
  }

  ${p => p.theme.maxWidth.large`
    margin-left: 0;
    width: 100%;
    padding: 7em 0;
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
  position: relative;

  &:hover {
    background-color: ${p => p.theme.colors.blue};
  }

  > svg {
    position: absolute;
    bottom: -0.5em;
    right: -1.5em;
    width: 2.5em;
    height: 2.5em;
  }
`;

const Widget = () => {
  const { showResults } = useContext(ResultsContext);

  const [submited, setSubmited] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setSubmited(null), 4000);

    return () => clearTimeout(timer);
  }, [submited]);

  return (
    <Wrapper>
      <CalcWrapper>
        <WidgetWrapper>
          <TitleBox>
            <Brand>Weiss light </Brand>
            <Name>Calculator</Name>
          </TitleBox>
          <Container topBorder>
            <Box>
              <List />
              <CalcForm />
              <Submit type="submit" form="calc-form">
                Obračunaj
              </Submit>
            </Box>
          </Container>
        </WidgetWrapper>
        {showResults && <Products />}
      </CalcWrapper>
      <WidgetWrapper contact>
        <Container contact>
          <Box contact>
            <ContactForm setSubmited={setSubmited} />
            <Submit type="submit" form="contact-form">
              Pošalji upit
              {submited === 'success' ? (
                <RoundCheck />
              ) : submited === 'error' ? (
                <RoundError />
              ) : null}
            </Submit>
          </Box>
          <LogoContainer>
            <Logo />
          </LogoContainer>
        </Container>
      </WidgetWrapper>
    </Wrapper>
  );
};

export default Widget;
