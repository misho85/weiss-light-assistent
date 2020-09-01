import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 6.5em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.1em;
`;

const ImageBox = styled.div`
  height: 100%;
  width: 8em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${p => p.theme.colors.gray};
  border-radius: 1em;
`;

const Image = styled.img`
  width: 7em;
`;

const Title = styled.p`
  width: 6em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0.5em;
`;

const Info = styled.div`
  background-color: ${p => p.theme.colors.gray};
  border-radius: 1em;
  width: 100%;
  height: 100%;
  margin-left: 1em;
  padding: 1em 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const Data = styled.div`
  border-right: 1px solid black;
  height: 100%;
  width: 14%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:last-child {
    border-right: none;
  }
`;

const Power = styled.p`
  font-weight: bold;
  margin-bottom: 1em;
`;

const Count = styled.p``;

const Product = ({ data }) => (
  <Wrapper>
    <ImageBox>
      <Image src={data.slika} />
      <Title>{data.ime}</Title>
    </ImageBox>
    <Info>
      <Data>
        <Power>10W</Power>
        <Count>100X</Count>
      </Data>
      <Data>
        <Power>15W</Power>
        <Count>80X</Count>
      </Data>
      <Data>
        <Power>30W</Power>
        <Count>20X</Count>
      </Data>
      <Data />
      <Data />
      <Data />
      <Data />
    </Info>
  </Wrapper>
);

export default Product;
