import React, { useState, useContext, memo } from 'react';
import styled, { css } from 'styled-components';
import Tooltip from '@reach/tooltip';
import { Plus, Bin, Pen } from '../../icons';
import { ListContext } from '../../context/ListContext';
import Item from './Item';

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  border-radius: 2em;
  background-color: ${p => p.theme.colors.white};
  margin-bottom: 1.2em;
  padding: 3%;
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

const iconsMixin = css`
  position: absolute;

  svg {
    width: 1.5em;
    height: 1.5em;

    &:first-child {
      margin-right: 1em;
    }
  }
`;

const IconsLeft = styled.div`
  ${iconsMixin}
  left: 0;
`;

const IconsRight = styled.div`
  ${iconsMixin}
  right: 0;
`;

const disabledMixin = css`
  cursor: ${p => (p.disabled ? `not-allowed` : `pointer`)};

  > svg {
    opacity: ${p => (p.disabled ? 0.5 : 1)};
  }
`;

const Remove = styled.button`
  ${disabledMixin}
`;

const Add = styled.button`
  ${disabledMixin}
`;

const Edit = styled.button`
  ${disabledMixin}
`;

const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: repeat(2, minmax(auto, 1fr));
  grid-column-gap: 0.3em;
  grid-row-gap: 1em;
  grid-auto-flow: dense;
`;

const List = () => {
  const { state, dispatch } = useContext(ListContext);

  const handleAdd = () => {
    const initialItem = {
      id: Date.now(),
      label: '',
      kvadratura: 0,
      visina: 0,
      lux: 0,
      zidovi: false,
      podovi: false,
    };

    dispatch({ type: 'ADD_ITEM', payload: initialItem });
    dispatch({ type: 'SELECT_ITEM', payload: initialItem });
  };

  const handleRemove = () => {
    dispatch({ type: 'REMOVE_ITEM', payload: state.selected });
    dispatch({
      type: 'SELECT_ITEM',
      payload: state.items[state.items.length - 1],
    });
  };

  const [editActive, setEditActive] = useState(false);

  const editActiveOn = () => setEditActive(true);

  return (
    <Wrapper>
      <Header>
        <IconsLeft>
          <Tooltip label="Dodaj Objekat">
            <Add onClick={handleAdd} disabled={state.items.length >= 6}>
              <Plus />
            </Add>
          </Tooltip>
        </IconsLeft>
        <IconsRight>
          <Tooltip label="Preimenuj Objekat">
            <Edit onClick={editActiveOn} disabled={state.items.length < 1}>
              <Pen />
            </Edit>
          </Tooltip>
          <Tooltip label="Ukloni Objekat">
            <Remove onClick={handleRemove} disabled={state.items.length < 1}>
              <Bin />
            </Remove>
          </Tooltip>
        </IconsRight>
        <p>Vrsta objekta</p>
      </Header>
      <Box>
        {state.items.map(el => (
          <Item
            key={el.id}
            data={el}
            selected={el.id === state.selected.id}
            editActive={el.id === state.selected.id && editActive}
            setEditActive={setEditActive}
          />
        ))}
      </Box>
    </Wrapper>
  );
};

export default memo(List);
