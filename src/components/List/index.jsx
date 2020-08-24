import React from 'react';
import styled from 'styled-components';
import { Plus, Bin } from '../../icons';
import Item from './Item';

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  border-radius: 2em;
  background-color: ${p => p.theme.colors.white};
  margin-bottom: 1.2em;
  padding: 3%;
`;

const Header = styled.div`
  position: relative;
  text-align: center;
  margin-bottom: 1em;

  > p {
    font-size: 1.5em;
    font-weight: 600;
  }
`;

const Icons = styled.div`
  position: absolute;
  left: 0;

  > svg {
    width: 1.5em;
    height: 1.5em;

    &:first-child {
      margin-right: 1em;
    }
  }
`;

const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: repeat(2, minmax(auto, 1fr));
  grid-column-gap: 0.3em;
  grid-row-gap: 1em;
  grid-auto-flow: dense;
`;

function List() {
  return (
    <Wrapper>
      <Header>
        <Icons>
          <Plus />
          <Bin />
        </Icons>
        <p>Vrsta objekta</p>
      </Header>
      <Box>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </Box>
    </Wrapper>
  );
}

export default List;
