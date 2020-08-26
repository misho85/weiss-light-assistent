import React, { useState, useContext } from 'react';
import styled from 'styled-components';
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

const IconsLeft = styled.div`
  position: absolute;
  left: 0;

  svg {
    width: 1.5em;
    height: 1.5em;

    &:first-child {
      margin-right: 1em;
    }
  }
`;

const IconsRight = styled.div`
  position: absolute;
  right: 0;

  svg {
    width: 1.5em;
    height: 1.5em;

    &:first-child {
      margin-right: 1em;
    }
  }
`;

const Remove = styled.button``;

const Add = styled.button`
  cursor: ${p => (p.disabled ? `not-allowed` : `pointer`)};

  > svg {
    opacity: ${p => (p.disabled ? 0.5 : 1)};
  }
`;

const Edit = styled.button``;

const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: repeat(2, minmax(auto, 1fr));
  grid-column-gap: 0.3em;
  grid-row-gap: 1em;
  grid-auto-flow: dense;
`;

export default function List() {
  const { state, dispatch } = useContext(ListContext);

  const [addActive, setAddActive] = useState(false);

  console.log('addActive', addActive);

  const handleAdd = item => {
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
    setAddActive(true);
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
          <Add onClick={handleAdd} disabled={state.items.length >= 6}>
            <Plus />
          </Add>
        </IconsLeft>
        <IconsRight>
          <Edit onClick={editActiveOn}>
            <Pen />
          </Edit>
          <Remove onClick={handleRemove}>
            <Bin />
          </Remove>
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
}
