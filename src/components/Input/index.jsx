import PropTypes from 'prop-types';
import { memo, useFormContext } from 'react-hook-form';
import styled from 'styled-components';

import ErrorMessage from './ErrorMessage';
import { FormFalse, FormTrue } from './icons';

const InputContainer = styled.div`
  position: relative;
  width: ${p => (p.contact ? `100%` : `7em`)};
  height: ${p => (p.contact ? `unset` : `2.4em`)};
  display: flex;
  flex-direction: column;
  margin-bottom: ${p => (p.contact ? `2.5em` : 0)};

  input,
  textarea {
    text-align: ${p => (p.contact ? `unset` : `center`)};
    padding: ${p => (p.contact ? `1em 2em 1em 1.5em` : `0.5em 1em`)};
    outline: none;
    appearance: none;
    font-size: 1em;
    line-height: 1.4;
    background-color: ${p => p.theme.colors.gray};
    transition: all 0.2s ease-in-out;

    &::placeholder {
      color: ${p => p.theme.colors.grayDark};
      opacity: 0.7;
      font-style: italic;
    }

    &:hover,
    &:focus {
      box-shadow: 0 0 0 2px ${p => p.theme.colors.blue};
    }

    &:disabled {
      background-color: ${p => p.theme.colors.disabledInput};
      border-color: ${p => p.theme.colors.disabledInput};
      cursor: not-allowed;
    }
  }

  input {
    border-radius: 1.5em;
  }

  textarea {
    height: auto;
    resize: vertical;
    border-radius: 1em;
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
  type = '',
  name,
  placeholder = '',
  autoComplete = 'off',
  required = false,
  textarea = false,
  disabled = false,
  rows = 10,
  contact = false,
  ...props
}) => {
  const { register, errors, formState } = useFormContext();

  return (
    <InputContainer error={errors[name]} contact={contact}>
      <label hidden htmlFor={name}>
        {name}
      </label>
      {!textarea ? (
        <>
          <input
            id={name}
            aria-label={name}
            type={type}
            name={name}
            placeholder={placeholder}
            autoComplete={autoComplete}
            disabled={disabled}
            ref={register({ required })}
            {...props}
          />
          {contact &&
            required &&
            formState.touched[name] &&
            (errors[name] ? <FormFalse /> : <FormTrue />)}
        </>
      ) : (
        <>
          <textarea
            id={name}
            aria-label={name}
            name={name}
            placeholder={placeholder}
            disabled={disabled}
            ref={register({ required })}
            rows={rows}
          />
          {contact &&
            required &&
            formState.touched[name] &&
            (errors[name] ? <FormFalse /> : <FormTrue />)}
        </>
      )}
      {contact && <ErrorMessage name={name} />}
    </InputContainer>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  textarea: PropTypes.bool,
  autoComplete: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  rows: PropTypes.number,
  contact: PropTypes.bool,
};

export default memo(Input);
