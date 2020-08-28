import React from 'react';
import styled from 'styled-components';
import data from '../../data/products';
import Product from './Product';

const Wrapper = styled.div``;

const Box = styled.div`
  width: 50em;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1.5em 4.5em 1.5em 0;
`;

const Products = () => (
  <Wrapper>
    <Box>
      {data.map(el => {
        if (el.id < 4) return <Product key={el.id} data={el} />;
      })}
    </Box>
  </Wrapper>
);

export default Products;
