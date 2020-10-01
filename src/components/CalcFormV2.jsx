import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
import { ListContext } from '../context/ListContext';
import { ResultsContext } from '../context/ResultsContext';
import { MagnifyingGlass, Plus } from '../assets/icons';
import Input from './Input';
import Checkbox from './Checkbox';
import items from '../data/luxItems';

const Wrapper = styled.form`
  position: relative;
  width: 100%;
  height: auto;
  border-radius: 2em;
  background-color: ${p => p.theme.colors.white};
  margin-bottom: 1.2em;
  padding: 3% 8%;
  overflow: hidden;
`;

const Select = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: ${p => p.theme.colors.gray};
  padding: 1em 0;
`;

const SelectHeader = styled.div`
  position: relative;
  text-align: center;
  margin-bottom: 1em;

  > p {
    font-size: 1.5em;
    font-weight: 600;
  }
`;

const SelectClose = styled.button`
  position: absolute;
  right: 0.5em;
  top: -0.5em;
  width: 2.5em;
  height: 2.5em;

  > svg {
    width: 2em;
    height: 2em;
    transform: rotate(45deg);
    fill: red;
  }
`;

const LuxList = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: 75%;
  padding: 0 3em;

  &::-webkit-scrollbar {
    width: 0.5em;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${p => p.theme.colors.blue};
    border-radius: 3px;

    &:hover {
      background: ${p => p.theme.colors.blueLight};
    }
  }
`;

const LuxItem = styled.button`
  padding: 0.5em;
  border-bottom: 1px solid #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 1.2em;
  font-weight: 600;

  &:hover {
    background-color: ${p => p.theme.colors.blueLight};
  }
`;

const LuxItemLabel = styled.p`
  text-transform: capitalize;
`;

const LuxItemValue = styled.p``;

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

const RecomendedLux = styled.div`
  position: relative;
  transition: all 200ms;
  height: 2.4em;
  width: ${p => (p.active ? `14em` : `2.4em`)};
  border-radius: 0.4em;
  background-color: ${p => p.theme.colors.gray};
  ${p =>
    p.active &&
    p.theme.maxWidth.phone`
    margin-left: -11em;
  `}
`;

const Search = styled.button`
  position: absolute;
  left: 0;
  width: 2.4em;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    width: 1.8em;
    height: 1.8em;
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

  const [active, setActive] = useState(false);

  const toggleActive = () => setActive(!active);

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

    if (!active) {
      dispatch({ type: 'EDIT_ITEM', payload: item });

      setShowResults(true);
    }
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
        {active && (
          <Select>
            <SelectHeader>
              <SelectClose onClick={toggleActive}>
                <Plus />
              </SelectClose>
              <p>Predlozi</p>
            </SelectHeader>
            <LuxList>
              {items.map(el => (
                <LuxItem
                  key={el.label}
                  type="button"
                  onClick={() => {
                    setSelectedItem(el.value);
                    toggleActive();
                  }}
                >
                  <LuxItemLabel>{el.label}</LuxItemLabel>
                  <LuxItemValue>{el.value} lux</LuxItemValue>
                </LuxItem>
              ))}
            </LuxList>
          </Select>
        )}
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
                  <RecomendedLux>
                    <Search type="button" onClick={toggleActive}>
                      <MagnifyingGlass />
                    </Search>
                  </RecomendedLux>
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
