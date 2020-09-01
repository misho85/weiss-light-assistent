import React, { useContext } from 'react';
import styled from 'styled-components';
import { ListContext } from '../../context/ListContext';

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

const countByLumen = (stateLumen, itemLumen) =>
  Math.round(stateLumen / itemLumen);

const Product = ({ data }) => {
  const { state } = useContext(ListContext);

  const emptyField = data.types.length <= 7 ? 7 - data.types.length : 0;

  return (
    <Wrapper>
      <ImageBox>
        <Image src={data.slika} />
        <Title>{data.ime}</Title>
      </ImageBox>
      <Info>
        {data.types.map((el, i) => {
          const count = countByLumen(state.selected.lumen, el.flux);
          if (i < 7)
            return (
              <Data key={el.id}>
                <Power>{`${el.snaga}W`}</Power>
                <Count>{`${count}X`}</Count>
              </Data>
            );

          return null;
        })}
        {[...Array(emptyField).keys()].map(el => (
          <Data key={`empty-${el}`} />
        ))}
      </Info>
    </Wrapper>
  );
};

export default Product;
