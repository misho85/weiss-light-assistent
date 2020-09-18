import React, { useState } from 'react';
import styled from 'styled-components';
import { useCombobox } from 'downshift';
import items from '../../data/luxItems';

const SearchWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 2.4em;
`;

const Combobox = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  > input {
    width: 100%;
    height: 100%;
    padding: 0 1em;
    background-color: ${p => p.theme.colors.blueLight};
    outline: none;
    appearance: none;
    text-align: center;
    border-radius: 0 0.4em 0.4em 0;
  }

  > button {
    position: absolute;
    right: 0;
  }
`;

const Dropdown = styled.ul`
  max-height: 8em;
  overflow-y: scroll;
  background-color: ${p => p.theme.colors.white};
  list-style: none;
  position: relative;
  margin-top: 0.5em;
  border-radius: 0.4em;
  box-shadow: 0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1);
  padding: 0.4em;
  cursor: pointer;

  &::-webkit-scrollbar {
    width: 0.5em;
    height: 0.5em;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${p => p.theme.colors.pink};
    border-radius: 3px;

    &:hover {
      background: ${p => p.theme.colors.blueLight};
    }
  }
`;

const Item = styled.li`
  ${p => p.highlight && `background-color: ${p.theme.colors.blueLight};`};
  border-radius: 0.3em;
  padding-left: 1em;
`;

const AutoComplete = ({ setSelectedItem }) => {
  const [inputItems, setInputItems] = useState(items);

  const {
    isOpen,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
    openMenu,
  } = useCombobox({
    items: inputItems,
    onSelectedItemChange: ({ selectedItem }) => {
      setSelectedItem(selectedItem.value);
    },
    itemToString: item => (item ? item.label : ''),
    onInputValueChange: ({ inputValue }) => {
      setInputItems(
        items.filter(item =>
          item.label.toLowerCase().startsWith(inputValue.toLowerCase())
        )
      );
    },
  });

  return (
    <SearchWrapper>
      <label hidden {...getLabelProps()}>
        Search
      </label>
      <Combobox {...getComboboxProps()}>
        <input
          {...getInputProps({ onFocus: () => openMenu() })}
          type="text"
          placeholder="Predlozi"
        />
      </Combobox>
      <div {...getMenuProps()}>
        {isOpen && (
          <Dropdown>
            {inputItems.map((item, index) => (
              <Item
                {...getItemProps({ item, index })}
                key={`${item.label}${index}`}
                highlight={highlightedIndex === index}
              >
                {item.label}
              </Item>
            ))}
          </Dropdown>
        )}
      </div>
    </SearchWrapper>
  );
};

export default AutoComplete;
