import React from 'react';
import PropTypes from 'prop-types';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';

const Message = styled.small`
  position: absolute;
  bottom: -1.5em;
  color: ${p => p.theme.colors.pink};
  font-size: 0.8em;
`;

const ErrorMessage = ({ name }) => {
  const { errors } = useFormContext();
  if (!errors[name]) return null;

  return <Message>{errors[name].message}</Message>;
};

ErrorMessage.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ErrorMessage;
