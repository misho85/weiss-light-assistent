import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 4em;
  border-radius: 0.5em;
  background-color: ${p => p.theme.colors.gray};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${p => p.theme.colors.blueLight};
  }
`;

const Label = styled.p`
  font-size: 1.2em;
`;

function List() {
  return (
    <Wrapper>
      <Label>Office</Label>
    </Wrapper>
  );
}

export default List;
