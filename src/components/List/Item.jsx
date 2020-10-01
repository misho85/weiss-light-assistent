import React, { useState, useEffect, useContext, memo } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { ListContext } from '../../context/ListContext';

const wrapperCSS = css`
  width: 100%;
  height: 3.4em;
  border-radius: 0.5em;
  background-color: ${p =>
    p.selected ? p.theme.colors.blueLight : p.theme.colors.gray};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  font-size: 1.2em;
  text-align: center;
  ${p =>
    p.selected &&
    css`
      box-shadow: 0 0 0 3px ${p.theme.colors.blue};
    `};
`;

const WrapperButton = styled.button`
  ${wrapperCSS}

  &:hover {
    background-color: ${p => p.theme.colors.blueLight};
  }
`;

const Input = styled.input`
  ${wrapperCSS}
  outline: none;
  appearance: none;

  &:focus {
    box-shadow: 0 0 0 3px ${p => p.theme.colors.blue};
  }
`;

const Label = styled.p``;

const Item = ({ selected, data, editActive, setEditActive }) => {
  const [itemName, setItemName] = useState(data.label);
  const [isInput, setIsInput] = useState(false);

  const { dispatch } = useContext(ListContext);

  const handleSelect = () => dispatch({ type: 'SELECT_ITEM', payload: data });

  const handleItemNameChange = e => setItemName(e.target.value);

  const handleEditLabel = labelName => {
    const label = labelName ? labelName : 'novi objekat';
    dispatch({ type: 'EDIT_ITEM', payload: { ...data, label } });
  };

  const handleEnter = event => {
    if (event.keyCode === 13) {
      handleEditLabel(itemName);
      setIsInput(false);
      setEditActive(false);
    }
  };

  const handleBlur = () => {
    handleEditLabel(itemName);
    setIsInput(false);
    setEditActive(false);
  };

  useEffect(() => {
    if (editActive) setIsInput(true);
    if (!editActive) setIsInput(false);
    if (!data.label) setIsInput(true);
  }, [editActive, data.label]);

  useEffect(() => {
    dispatch({ type: 'SELECT_ITEM', payload: data });
  }, [dispatch, data]);

  return (
    <>
      {isInput ? (
        <Input
          value={itemName}
          autoFocus={true}
          placeholder="naziv objekta"
          onKeyUp={handleEnter}
          onChange={handleItemNameChange}
          onBlur={handleBlur}
        />
      ) : (
        <WrapperButton selected={selected} onClick={handleSelect}>
          <Label>{data.label}</Label>
        </WrapperButton>
      )}
    </>
  );
};

Item.propTypes = {
  selected: PropTypes.bool.isRequired,
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    kvadratura: PropTypes.number.isRequired,
    visina: PropTypes.number.isRequired,
    lux: PropTypes.number.isRequired,
    podovi: PropTypes.bool.isRequired,
    zidovi: PropTypes.bool.isRequired,
  }).isRequired,
  editActive: PropTypes.bool.isRequired,
  setEditActive: PropTypes.func.isRequired,
};

export default memo(Item);
