import React from 'react';
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
      box-shadow: 0 0 0 2px ${p => p.theme.colors.blueLight};
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
  placeholder,
  autoComplete,
  required,
  disabled,
}) => {
  const { register, errors, formState } = useFormContext();

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
      {/* {required &&
        formState.touched[name] &&
        (errors[name] ? <FormFalse /> : <FormTrue />)} */}
    </InputContainer>
  );
};

Input.defaultProps = {
  type: '',
  disabled: false,
  autoComplete: 'off',
  required: false,
};

Input.propTypes = {
  type: PropTypes.string,
  autoComplete: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
};

export default Input;
