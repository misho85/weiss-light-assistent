import React, { useContext } from 'react';
import styled from 'styled-components';
import { ListContext } from '../../context/ListContext';

const Wrapper = styled.button`
  width: 100%;
  height: 4em;
  border-radius: 0.5em;
  background-color: ${p =>
    p.selected ? p.theme.colors.pink : p.theme.colors.gray};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${p =>
      p.selected ? p.theme.colors.pink : p.theme.colors.blueLight};
  }
`;

const Label = styled.p`
  font-size: 1.2em;
`;

function Item({ selected, data }) {
  const { dispatch } = useContext(ListContext);

  function handleSelect() {
    dispatch({ type: 'SELECT_ITEM', payload: data });
  }

  return (
    <Wrapper selected={selected} onClick={handleSelect}>
      <Label>{data.label}</Label>
    </Wrapper>
  );
}

export default Item;
