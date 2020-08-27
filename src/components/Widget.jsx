import React from 'react';
import styled from 'styled-components';
import List from './List';
import Form from './Form';

const Wrapper = styled.div``;

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

const Box = styled.div`
  width: 50em;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${p => p.theme.colors.grayLight};
  border-top: 0.5em solid ${p => p.theme.colors.blueLight};
  padding: 3% 10%;
`;

const Submit = styled.button`
  background-color: ${p => p.theme.colors.blueLight};
  font-size: 1.5em;
  border-radius: 0.5em;
  width: auto;
  padding: 3% 5%;
  margin: auto;

  &:hover {
    opacity: 0.7;
  }
`;

function Widget() {
  return (
    <Wrapper>
      <TitleBox>
        <Brand>Weiss light </Brand>
        <Name>Assistent</Name>
      </TitleBox>
      <Box>
        <List />
        <Form />
        <Submit type="submit" form="calc-form">
          Obračunaj
        </Submit>
      </Box>
    </Wrapper>
  );
}

export default Widget;
