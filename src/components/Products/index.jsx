import React, { useContext } from 'react';
import styled from 'styled-components';
import Tooltip from '@reach/tooltip';
import { ResultsContext } from '../../context/ResultsContext';
import { ListContext } from '../../context/ListContext';
import { Plus } from '../../assets/icons';
import data from '../../data/products';
import Product from './Product';

const Wrapper = styled.div`
  margin-left: 2em;
  position: relative;
  ${p => p.theme.maxWidth.large`
    margin-left: 0;
    margin-top: 2em;
  `}
  ${p => p.theme.maxWidth.phone`
    width: 100%;
  `}
`;

const Title = styled.p`
  text-align: end;
  padding-right: 10%;
  margin-bottom: 0.25em;
  font-size: 2em;
  text-transform: uppercase;
`;

const Box = styled.div`
  width: 40em;
  height: 40em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1em 1.5em 0 1.5em;
  background-color: ${p => p.theme.colors.grayLight};
  border-top: 0.5em solid ${p => p.theme.colors.grayLight};
  overflow: auto;
  ${p => p.theme.maxWidth.large`
    width: 50em;
  `}
  ${p => p.theme.maxWidth.phone`
    width: 100%;
    height: 61.5em;
  `}

  &::-webkit-scrollbar {
    width: 0.5em;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${p => p.theme.colors.blue};
    border-radius: 3px;

    &:hover {
      background: ${p => p.theme.colors.blueLight};
    }
  }
`;

const Close = styled.button`
  position: absolute;
  right: 0;
  width: 2.5em;
  height: 2.5em;
  ${p => p.theme.maxWidth.phone`
    right: unset;
    left: 5%;
  `}

  > svg {
    width: 2em;
    height: 2em;
    transform: rotate(45deg);
    fill: red;
  }
`;

const Products = () => {
  const { setShowResults } = useContext(ResultsContext);
  const { state } = useContext(ListContext);

  const closeList = () => setShowResults(false);

  const gVis = state.selected.visina;

  return (
    <Wrapper>
      <Tooltip label="Zatvori listu">
        <Close onClick={closeList}>
          <Plus />
        </Close>
      </Tooltip>
      <Title>Potrebna rasveta</Title>
      <Box>
        {data.map(el => {
          if (el.visina[0] <= gVis && gVis <= el.visina[1]) {
            return <Product key={el.id} data={el} />;
          }
          return null;
        })}
      </Box>
    </Wrapper>
  );
};

export default Products;
