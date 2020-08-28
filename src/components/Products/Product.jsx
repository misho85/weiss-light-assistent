import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 11em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 2em;
  background-color: ${p => p.theme.colors.white};
  margin-bottom: 1.2em;
  padding: 3%;
`;

const Image = styled.img`
  height: 100%;
`;

const Info = styled.div``;

const Product = ({ data }) => (
  <Wrapper>
    <Info>
      <p>{data.ime}</p>
    </Info>
    <Image src={data.slika} />
  </Wrapper>
);

export default Product;
