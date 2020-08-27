import React, { memo } from 'react';
import styled from 'styled-components';
import { MagnifyingGlass } from '../../icons';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 200ms;
  height: 2.4em;
  width: 2.4em;
  border-radius: 0.4em;
  background-color: ${p => p.theme.colors.gray};
  cursor: pointer;

  svg {
    width: 1.8em;
    height: 1.8em;
  }
`;

const RecomendedLux = () => (
  <Wrapper>
    <MagnifyingGlass />
  </Wrapper>
);

export default memo(RecomendedLux);
