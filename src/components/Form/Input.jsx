import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useFormContext } from 'react-hook-form';

const InputContainer = styled.div`
  position: relative;
  width: 7em;
  height: 2.4em;
  display: flex;
  flex-direction: column;

  input {
    text-align: center;
    padding: 0.5em 1em;
    outline: none;
    appearance: none;
    font-size: 1em;
    line-height: 1.4;
    border-radius: 1.5em;
    background-color: ${p => p.theme.colors.gray};
    transition: all 0.2s ease-in-out;

    &:hover,
    &:focus {
      box-shadow: 0 0 0 3px ${p => p.theme.colors.pink};
    }

    &:disabled {
      background-color: ${p => p.theme.colors.disabledInput};
      border-color: ${p => p.theme.colors.disabledInput};
      cursor: not-allowed;
    }
  }

  > svg {
    width: 1em;
    height: 1em;
    position: absolute;
    right: 1em;
    top: 1.1em;
  }
`;

const Input = ({
  type,
  name,
  placeholder = '',
  autoComplete = 'off',
  required = false,
  disabled = false,
}) => {
  const { register, errors } = useFormContext();

  return (
    <InputContainer error={errors[name]}>
      <label hidden htmlFor={name}>
        {name}
      </label>

      <input
        id={name}
        aria-label={name}
        type={type}
        name={name}
        placeholder={placeholder}
        autoComplete={autoComplete}
        disabled={disabled}
        ref={register({ required })}
      />
    </InputContainer>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  autoComplete: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
};

export default memo(Input);
