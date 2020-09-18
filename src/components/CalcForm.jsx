import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
import { ListContext } from '../context/ListContext';
import { ResultsContext } from '../context/ResultsContext';
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
  ${p => p.theme.maxWidth.phone`
    flex-direction: column;
  `}
`;

const BoxLeft = styled.div``;

const BoxRight = styled.div`
  ${p => p.theme.maxWidth.phone`
    margin-right: 5em;
  `}
`;

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
  kvadratura: yup.number().min(1).required('Kvadratura is required!'),
  visina: yup.number().min(1).required('Visina is required!'),
  lux: yup.number().min(1).required('Lux is required!'),
});

const CalcForm = () => {
  const { state, dispatch } = useContext(ListContext);
  const { setShowResults } = useContext(ResultsContext);

  const methods = useForm({
    mode: 'onBlur',
    resolver: yupResolver(validationSchema),
  });

  const { handleSubmit, setValue } = methods;

  const [selectedItem, setSelectedItem] = useState(0);

  useEffect(() => setValue('lux', selectedItem), [selectedItem, setValue]);

  const onSubmit = data => {
    const item = {
      id: state.selected.id,
      label: state.selected.label,
      kvadratura: data.kvadratura,
      visina: data.visina,
      lux: data.lux,
      zidovi: data.zidovi,
      podovi: data.podovi,
    };

    dispatch({ type: 'EDIT_ITEM', payload: item });

    setShowResults(true);
  };

  useEffect(() => {
    setValue('kvadratura', state.selected.kvadratura);
    setValue('visina', state.selected.visina);
    setValue('lux', state.selected.lux);
    setValue('zidovi', state.selected.zidovi);
    setValue('podovi', state.selected.podovi);
  }, [state.selected, setValue]);

  return (
    <FormProvider {...methods}>
      <Wrapper onSubmit={handleSubmit(onSubmit)} id="calc-form">
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
                  <RecomendedLux setSelectedItem={setSelectedItem} />
                </span>
              </div>
            </InputBox>
          </BoxLeft>
          <BoxRight>
            <InputBox>
              <p>Osvetliti zidove</p>
              <div>
                <Checkbox
                  name="zidovi"
                  defaultChecked={!!state.selected.zidovi}
                />
              </div>
            </InputBox>
            <InputBox>
              <p>Osvetliti podove</p>
              <div>
                <Checkbox
                  name="podovi"
                  defaultChecked={!!state.selected.podovi}
                />
              </div>
            </InputBox>
          </BoxRight>
        </Box>
      </Wrapper>
    </FormProvider>
  );
};

export default CalcForm;
