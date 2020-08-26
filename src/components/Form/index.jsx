import React from 'react';
import styled from 'styled-components';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
import Input from './Input';
import Checkbox from './Checkbox';
import RecomendedLux from './RecomendedLux';

const Wrapper = styled.form`
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

const validationSchema = yup.object().shape({
  kvadratura: yup.number().required('Kvadratura is required!'),
  visina: yup.number().required('Visina is required!'),
  lux: yup.number().required('Lux is required!'),
});

function Form() {
  const methods = useForm({
    mode: 'onBlur',
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <Wrapper onSubmit={methods.handleSubmit(onSubmit)} id="calc-form">
        <Header>
          <p>Dimenzije objekta</p>
        </Header>
        <Box>
          <BoxLeft>
            <InputBox>
              <p>Kvadratura</p>
              <div>
                <Input type="number" name="kvadratura" required />
                <span>m2</span>
              </div>
            </InputBox>
            <InputBox>
              <p>Visina</p>
              <div>
                <Input type="number" name="visina" required />
                <span>m</span>
              </div>
            </InputBox>
            <InputBox>
              <p>Željeni LUX</p>
              <div>
                <Input type="number" name="lux" required />
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
                <Checkbox name="zidovi" />
              </div>
            </InputBox>
            <InputBox>
              <p>Osvetliti podove</p>
              <div>
                <Checkbox name="podovi" />
              </div>
            </InputBox>
          </BoxRight>
        </Box>
      </Wrapper>
    </FormProvider>
  );
}

export default Form;
