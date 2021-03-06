import PropTypes from 'prop-types';
import { memo, useContext, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import styled, { css } from 'styled-components';

import { Check } from '~assets/icons';
import { ListContext } from '~context/ListContext';

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

  &:hover,
  &:focus {
    box-shadow: 0 0 0 3px ${p => p.theme.colors.blue};
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

const Checkbox = ({ name, defaultChecked }) => {
  const [checked, setChecked] = useState(defaultChecked);
  const { register } = useFormContext();
  const { state } = useContext(ListContext);

  useEffect(() => {
    setChecked(state.selected[name]);
  }, [state.selected, name]);

  const handleCheckboxChange = e => setChecked(e.target.checked);
  const toggleCheckbox = () => setChecked(!checked);

  return (
    <Wrapper onClick={toggleCheckbox}>
      <HiddenCheckbox
        ref={register}
        type="checkbox"
        name={name}
        checked={checked}
        onChange={handleCheckboxChange}
      />
      <CheckboxContainer checked={checked}>
        <Check />
      </CheckboxContainer>
    </Wrapper>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  defaultChecked: PropTypes.bool.isRequired,
};

export default memo(Checkbox);
