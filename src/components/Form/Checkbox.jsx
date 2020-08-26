import React, { useState, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import styled, { css } from 'styled-components';
import { Check } from '../../icons';

const Wrapper = styled.div``;

const HiddenCheckbox = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px !important;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  transition: all 200ms;
  height: 2.4em;
  width: 2.4em;
  border-radius: 0.4em;
  background-color: ${p => p.theme.colors.gray};
  cursor: pointer;

  svg {
    width: 2em;
    height: 2em;
  }

  ${p =>
    p.checked
      ? css`
          svg #formCheck {
            transition: all 150ms ease-in-out;
            stroke: #027cb2;
          }
        `
      : css`
          svg #formCheck {
            transition: all 150ms ease-in-out;
            stroke: transparent;
          }
        `}
`;

const Checkbox = ({ name }) => {
  const { register, getValues } = useFormContext();

  const [state, setState] = useState({ checked: false });

  const handleCheckboxChange = event => {
    setState({ ...state, checked: event.target.checked });
  };

  useEffect(() => setState({ checked: false }), []);

  console.log('checked', getValues());

  return (
    <Wrapper onChange={handleCheckboxChange}>
      <label>
        <HiddenCheckbox
          ref={register}
          type="checkbox"
          name={name}
          checked={state.checked}
        />
        <CheckboxContainer checked={state.checked}>
          <Check />
        </CheckboxContainer>
      </label>
    </Wrapper>
  );
};

export default Checkbox;
