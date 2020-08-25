import React from 'react';
import styled from 'styled-components';
import Input from './Input';
import Checkbox from './Checkbox';
import RecomendedLux from './RecomendedLux';

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  border-radius: 2em;
  background-color: ${p => p.theme.colors.white};
  margin-bottom: 1.2em;
  padding: 3% 8%;
`;

const Header = styled.div`
  position: relative;
  text-align: center;
  margin-bottom: 1em;

  > p {
    font-size: 1.5em;
    font-weight: 600;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const BoxLeft = styled.div``;

const BoxRight = styled.div``;

const InputBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1em;

  > p {
    font-size: 1.2em;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 1em;

    > span {
      margin-left: 0.5em;
      width: 2.4em;
    }
  }
`;

function Form() {
  return (
    <Wrapper>
      <Header>
        <p>Dimenzije objekta</p>
      </Header>
      <Box>
        <BoxLeft>
          <InputBox>
            <p>Kvadratura</p>
            <div>
              <Input />
              <span>m2</span>
            </div>
          </InputBox>
          <InputBox>
            <p>Visina</p>
            <div>
              <Input />
              <span>m2</span>
            </div>
          </InputBox>
          <InputBox>
            <p>Željeni LUX</p>
            <div>
              <Input />
              <span>
                <RecomendedLux />
              </span>
            </div>
          </InputBox>
        </BoxLeft>
        <BoxRight>
          <InputBox>
            <p>Osvetliti zidove</p>
            <div>
              <Checkbox />
            </div>
          </InputBox>
          <InputBox>
            <p>Osvetliti zidove</p>
            <div>
              <Checkbox />
            </div>
          </InputBox>
        </BoxRight>
      </Box>
    </Wrapper>
  );
}

export default Form;
