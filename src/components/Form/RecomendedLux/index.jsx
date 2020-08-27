import React, { useState, memo } from 'react';
import styled from 'styled-components';
import { MagnifyingGlass } from '../../../icons';
import AutoComplete from './AutoComplete';

const Wrapper = styled.div`
  position: relative;
  transition: all 200ms;
  height: 2.4em;
  width: ${p => (p.active ? `14em` : `2.4em`)};
  border-radius: 0.4em;
  background-color: ${p => p.theme.colors.gray};
`;

const Search = styled.button`
  position: absolute;
  left: 0;
  width: 2.4em;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    width: 1.8em;
    height: 1.8em;
  }
`;

const RecomendedLux = () => {
  const [active, setActive] = useState(false);

  const toggleActive = () => setActive(!active);

  return (
    <Wrapper active={active}>
      <Search onClick={toggleActive}>
        <MagnifyingGlass />
      </Search>
      {active && <AutoComplete />}
    </Wrapper>
  );
};

export default memo(RecomendedLux);
