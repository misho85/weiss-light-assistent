import React, { useState } from 'react';
import styled from 'styled-components';
import List from './List';
import Form from './Form';
import Products from './Products';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const WidgetWrapper = styled.div``;

const TitleBox = styled.div`
  text-align: end;
  padding-right: 10%;
  margin-bottom: 0.5em;
  width: 50em;

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
`;

const Box = styled.div`
  width: 50em;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5em 4.5em;
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
  const [active, setActive] = useState(false);

  // const activeOn = () => setActive(true);
  const toggleActive = () => setActive(!active);

  return (
    <Wrapper>
      <WidgetWrapper>
        <TitleBox>
          <Brand>Weiss light </Brand>
          <Name>Assistent</Name>
        </TitleBox>
        <Container active={active}>
          <Box>
            <List />
            <Form />
            <Submit type="submit" form="calc-form" onClick={toggleActive}>
              Obračunaj
            </Submit>
          </Box>
        </Container>
      </WidgetWrapper>
      {active && <Products />}
    </Wrapper>
  );
};

export default Widget;
