import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
import { ListContext } from '../../context/ListContext';
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
  const { state, dispatch } = useContext(ListContext);

  const methods = useForm({
    mode: 'onBlur',
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = data => {
    console.log(data);

    const item = {
      id: state.selected.id,
      label: state.selected.label,
      kvadratura: data.kvadratura,
      visina: data.visina,
      zidovi: data.zidovi,
      podovi: data.podovi,
    };

    dispatch({ type: 'EDIT_ITEM', payload: item });
    console.log(item);
  };

  useEffect(() => {
    methods.setValue('kvadratura', state.selected.kvadratura);
    methods.setValue('visina', state.selected.visina);
    methods.setValue('lux', state.selected.lux);
    methods.setValue('zidovi', state.selected.zidovi);
    methods.setValue('podovi', state.selected.podovi);
  }, [state.selected, methods]);

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
