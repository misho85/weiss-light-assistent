import React, { useContext } from 'react';
import styled from 'styled-components';
import Tooltip from '@reach/tooltip';
import { ResultsContext } from '../../context/ResultsContext';
import { Plus } from '../../icons';
import data from '../../data/products';
import Product from './Product';

const Wrapper = styled.div`
  margin-left: 2em;
  position: relative;
`;

const Title = styled.p`
  text-align: end;
  padding-right: 10%;
  margin-bottom: 0.25em;
  font-size: 2em;
  text-transform: uppercase;
`;

const Box = styled.div`
  width: 50em;
  height: 40em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1em 1.5em 0 1.5em;
  background-color: ${p => p.theme.colors.grayLight};
  border-top: 0.5em solid ${p => p.theme.colors.grayLight};
  overflow: auto;
`;

const Close = styled.button`
  position: absolute;
  right: 0;
  width: 2.5em;
  height: 2.5em;

  > svg {
    width: 2em;
    height: 2em;
    transform: rotate(45deg);
    fill: red;
  }
`;

const Products = () => {
  const { setShowResults } = useContext(ResultsContext);

  const closeList = () => setShowResults(false);

  return (
    <Wrapper>
      <Tooltip label="Zatvori listu">
        <Close onClick={closeList}>
          <Plus />
        </Close>
      </Tooltip>
      <Title>Potrebna rasveta</Title>
      <Box>
        {data.map(el => (
          <Product key={el.id} data={el} />
        ))}
      </Box>
    </Wrapper>
  );
};

export default Products;
